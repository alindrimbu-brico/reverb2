// Motorul care rescrie pagina românească în limba aleasă (noduri de text, patru atribute, titlul filei).
// Regulile de culegere sunt aceleași în scripts/i18n_extrage.py: aceeași normalizare, aceleași zone sărite. Se schimbă împreună.
//
// - Ține pentru fiecare nod textul-sursă și textul pe care l-a scris. Dacă React rescrie nodul, valoarea nouă e o sursă nouă.
// - Scrie doar când valoarea diferă de traducere, deci nu se învârte cu React.
// - Titlurile <Linie> ([data-rl]) și rândul gri al primei pagini (.rl-word) se traduc singure, prin useLineText.
// - În modul "chrome" lucrează doar în bară, subsol și banda de cookie-uri.

import { getState, isActive, lookup, norm, noteMiss, subscribe, translatable } from "./store";

const SKIP = "script,style,noscript,code,pre,textarea,svg,canvas,[data-no-translate],[contenteditable],[data-rl],.rl-word";
const CHROME = 'body > header, body > footer, aside[aria-label="Cookie consent banner"]';
const ATTRS = ["placeholder", "aria-label", "title", "alt"];
const ATTR_SELECTOR = "[placeholder],[aria-label],[title],img[alt]";

type Rec = { src: string; shown: string };
let texts = new WeakMap<Node, Rec>();
let attrs = new WeakMap<Element, Record<string, Rec>>();
let title: Rec | null = null;
let body: MutationObserver | null = null;
let head: MutationObserver | null = null;
let started = false;
let lastKey = "";

const count = () => {
  window.__rvI18nWrites = (window.__rvI18nWrites ?? 0) + 1;
};

function allowed(el: Element | null): el is Element {
  if (!el || el.closest(SKIP)) return false;
  return getState().scope === "full" || el.closest(CHROME) !== null;
}

function translate(src: string): string | null {
  const key = norm(src);
  if (!key || !translatable(key)) return null;
  const out = lookup(key);
  if (out === null) {
    noteMiss(key);
    return null;
  }
  // spațiile de la capete rămân ale sursei (despart cuvântul de vecinii lui)
  return (src.match(/^[\s ]*/) as RegExpMatchArray)[0] + out + (src.match(/[\s ]*$/) as RegExpMatchArray)[0];
}

function textNode(node: Node) {
  if (!allowed(node.parentElement)) return;
  const raw = node.nodeValue ?? "";
  const rec = texts.get(node);
  if (rec && raw === rec.shown) return; // e ce am scris noi
  const out = translate(raw);
  if (out === null || out === raw) {
    if (rec) texts.delete(node);
    return;
  }
  texts.set(node, { src: raw, shown: out });
  node.nodeValue = out;
  count();
}

function attribute(el: Element, name: string) {
  if (el.closest("[data-no-translate]")) return;
  if (getState().scope !== "full" && el.closest(CHROME) === null) return;
  const raw = el.getAttribute(name);
  if (raw === null) return;
  const recs = attrs.get(el) ?? {};
  const rec = recs[name];
  if (rec && raw === rec.shown) return;
  const out = translate(raw);
  if (out === null || out === raw) {
    if (rec) delete recs[name];
    return;
  }
  recs[name] = { src: raw, shown: out };
  attrs.set(el, recs);
  el.setAttribute(name, out);
  count();
}

function tree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return textNode(root);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) textNode(n);
  const el = root as Element;
  const withAttrs = [...(el.matches(ATTR_SELECTOR) ? [el] : []), ...Array.from(el.querySelectorAll(ATTR_SELECTOR))];
  for (const e of withAttrs) for (const a of ATTRS) if (e.hasAttribute(a)) attribute(e, a);
}

function pageTitle() {
  const raw = document.title;
  if (title && raw === title.shown) return;
  const out = getState().scope === "full" ? translate(raw) : null;
  if (out === null || out === raw) {
    title = null;
    return;
  }
  title = { src: raw, shown: out };
  document.title = out;
}

/** Pune la loc tot ce a scris motorul (schimbare de limbă, ieșire din zonă). */
function restore() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const rec = texts.get(n);
    if (rec && n.nodeValue === rec.shown) n.nodeValue = rec.src;
  }
  for (const e of Array.from(document.querySelectorAll(ATTR_SELECTOR))) {
    const recs = attrs.get(e);
    if (!recs) continue;
    for (const a in recs) if (e.getAttribute(a) === recs[a].shown) e.setAttribute(a, recs[a].src);
  }
  texts = new WeakMap();
  attrs = new WeakMap();
  if (title && document.title === title.shown) document.title = title.src;
  title = null;
}

function unwait() {
  // Marcajul pus de scriptul din HTML (pagina ascunsă până la traducere) iese după ce React a redesenat și titlurile.
  const boot = window.__rvI18n;
  if (boot?.timer) clearTimeout(boot.timer);
  requestAnimationFrame(() => document.documentElement.removeAttribute("data-rv-i18n"));
}

function sync() {
  const s = getState();
  const active = isActive();
  const key = active ? `${s.locale}|${s.scope}` : "";
  const html = document.documentElement;
  if (s.status === "failed" || (s.status !== "loading" && !active)) unwait();
  // cât se descarcă alt dicționar, pagina rămâne cum e (nu trece prin română între două limbi)
  if (s.status === "loading" && s.scope !== "off") return;
  if (key === lastKey) return;
  lastKey = key;

  body?.disconnect();
  head?.disconnect();
  restore();
  for (const e of Array.from(document.querySelectorAll("header[data-rv-lang],footer[data-rv-lang]"))) {
    e.removeAttribute("lang");
    e.removeAttribute("data-rv-lang");
  }
  if (!active) {
    if (html.hasAttribute("data-rv-lang")) {
      html.lang = "ro";
      html.removeAttribute("translate");
      html.removeAttribute("data-rv-lang");
    }
    return;
  }

  if (s.scope === "full") {
    // traducerea browserului nu se suprapune peste a noastră
    html.lang = s.locale;
    html.setAttribute("translate", "no");
    html.setAttribute("data-rv-lang", s.locale);
  } else {
    // corpul rămâne în română: doar bara și subsolul își spun limba
    if (html.hasAttribute("data-rv-lang")) {
      html.lang = "ro";
      html.removeAttribute("translate");
      html.removeAttribute("data-rv-lang");
    }
    for (const e of Array.from(document.querySelectorAll("body > header, body > footer"))) {
      e.setAttribute("lang", s.locale);
      e.setAttribute("data-rv-lang", s.locale);
    }
  }
  tree(document.body);
  pageTitle();

  body = new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === "characterData") textNode(r.target);
      else if (r.type === "attributes" && r.attributeName) attribute(r.target as Element, r.attributeName);
      else r.addedNodes.forEach(tree);
    }
  });
  body.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  // React rescrie <title> la fiecare navigare
  head = new MutationObserver(pageTitle);
  head.observe(document.head, { subtree: true, childList: true, characterData: true });
  unwait();
}

/** Pornește motorul (o singură dată); de aici încolo urmează singur starea din store. */
export function startTranslator() {
  if (started || typeof window === "undefined") return;
  started = true;
  subscribe(sync);
  sync();
}

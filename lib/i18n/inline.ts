// Scriptul scurt pe care bara (components/Header.tsx) îl scrie în HTML-ul de pe server, înaintea conținutului paginii.
// Rulează înaintea React-ului, ca vizitatorul să nu vadă întâi româna și apoi limba lui:
//   1. hotărăște limba: alegerea salvată; altfel țara (antetul Server-Timing pus de middleware.ts, fără cookie), dar nimic automat dacă
//      browserul are româna printre limbi sau dacă țara e RO / MD; `?tara=DE` în adresă = probă (se poartă ca din țara aceea);
//   2. engleză detectată pe o pagină cu pereche → trece o singură dată pe sesiune la perechea /en (cu ?… și #… păstrate);
//   3. limbă cu dicționar → pornește descărcarea și ascunde conținutul (atributul data-rv-i18n pe <html>, vezi globals.css)
//      cel mult 2 secunde. Își scoate singur marcajul la limită sau la eroare: pagina nu poate rămâne ascunsă.
// Aceleași reguli sunt în lib/i18n/store.ts (`detect`), pentru intrările fără reîncărcare. Se schimbă împreună.

import { COUNTRY_LANG, STORAGE_KEY } from "./locales";
import { DICT_VERSION } from "./generated";
import { EXACT_EN, FULL_PATHS } from "./scope";

const config = JSON.stringify({ v: DICT_VERSION, full: FULL_PATHS, en: EXACT_EN, map: COUNTRY_LANG, key: STORAGE_KEY });

export const INLINE_I18N = `(function(c){var h=document.documentElement;try{
var p=location.pathname.replace(/\\/+$/,'')||'/';
var off=/^\\/(en|es|pt|ru|zh)(\\/|$)/.test(p)||/^\\/studio(\\/|$)/.test(p)||/^\\/showcase\\//.test(p);
var saved=null,store=true;try{saved=localStorage.getItem(c.key);sessionStorage.setItem('rv_t','1')}catch(e){store=false}
var q=/[?&]tara=([A-Za-z]{2})(?:&|$)/.exec(location.search);
var cc='';if(q)cc=q[1].toUpperCase();else try{var st=(performance.getEntriesByType('navigation')[0]||{}).serverTiming||[];
for(var j=0;j<st.length;j++)if(st[j].name==='rvcc'&&/^[A-Za-z]{2}$/.test(st[j].description||''))cc=st[j].description.toUpperCase()}catch(e){}
var loc=null,auto=false;
if(q){loc=c.map[cc]||'en';auto=true}
else if(saved&&(saved==='ro'||saved==='en'||c.v[saved])){loc=saved}
else if(cc&&cc!=='RO'&&cc!=='MD'){var L=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''],ro=false;
for(var i=0;i<L.length;i++)if(/^ro\\b/i.test(L[i]))ro=true;if(!ro){loc=c.map[cc]||'en';auto=true}}
var b=window.__rvI18n={locale:loc,auto:auto,cc:cc};
if(!loc||loc==='ro')return;
if(loc==='en'){if(auto&&!off&&c.en[p]&&(q||(store&&!sessionStorage.getItem('rv_en_once')))){
try{sessionStorage.setItem('rv_en_once','1')}catch(e){}location.replace(c.en[p]+location.search+location.hash)}return}
if(off||!c.v[loc])return;
var failed=false;try{failed=sessionStorage.getItem('rv_i18n_fail')===loc}catch(e){}
var done=function(){h.removeAttribute('data-rv-i18n')};
if(!failed){h.setAttribute('data-rv-i18n',c.full.indexOf(p)>=0?'full':'chrome');b.timer=setTimeout(done,2000)}
b.dict=fetch('/i18n/'+loc+'.json?v='+c.v[loc]).then(function(r){if(!r.ok)throw 0;return r.json()}).catch(function(){
try{sessionStorage.setItem('rv_i18n_fail',loc)}catch(e){}done();return null});
}catch(e){h.removeAttribute('data-rv-i18n')}})(${config});`;

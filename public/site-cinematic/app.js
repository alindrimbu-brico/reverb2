/* Site cinematic: cadre WebP derulate la scroll pe o pânză fixă.
   Sursa de adevăr = poziția nativă a scroll-ului; netezirea = o interpolare în rAF care se oprește când e liniște. */
(function () {
  "use strict";
  var root = document.documentElement;
  if (!root.classList.contains("cine")) { wireStaticChips(); return; }

  var section = document.getElementById("scrolly");
  var canvas = document.getElementById("film");
  var ctx = canvas.getContext("2d");
  var poster = section.querySelector(".poster");
  var overlays = section.querySelector(".overlays");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-chip]"));
  var WINDOW = 30;            // cadre decodate păstrate de o parte și de alta
  var MAX_PARALLEL = 6;

  var films = [], frames = [], segs = [], totalVh = 0;
  var bitmaps = new Map();    // index -> ImageBitmap
  var pending = new Map();    // index -> Promise
  var fetched = new Set();
  var queue = [];
  var active = 0;
  var shownIndex = -1, curPos = 0, targetPos = 0, running = false;

  fetch("frames/manifest.json").then(function (r) { return r.json(); }).then(init).catch(function () {
    root.classList.remove("cine"); wireStaticChips();
  });

  function init(man) {
    films = man.films;
    films.forEach(function (f, k) {
      var start = frames.length;
      for (var i = 0; i < f.count; i++) {
        var n = String(f.first + i).padStart(4, "0");
        frames.push(f.dir + "/d_" + n + "." + (man.ext || "webp"));
      }
      f.start = start; f.end = frames.length - 1;
      segs.push({ type: "film", film: k, vh: f.scrollVh, from: totalVh });
      totalVh += f.scrollVh;
      segs.push({ type: "hold", film: k, vh: f.holdVh, from: totalVh, chapter: f.chapter, accent: f.accent });
      totalVh += f.holdVh;
    });
    section.style.height = (totalVh + 100) + "vh";
    buildOverlays();
    resize();
    addEventListener("resize", function () { resize(); kick(); });
    addEventListener("scroll", kick, { passive: true });
    chips.forEach(function (b) { b.addEventListener("click", function () { jump(b.dataset.chip); }); });

    // Doar cadrele primului clip stau în spatele încărcătorului.
    var f0 = films[0], firstBatch = [];
    for (var i = f0.start; i <= f0.end; i++) firstBatch.push(i);
    Promise.all(firstBatch.slice(0, 40).map(load)).then(function () {
      root.classList.add("ready");
      draw(frameAt(scrollPos()));
      kick();
      idlePrefetch();
    });
  }

  function buildOverlays() {
    var op = document.querySelector(".opener .copy").cloneNode(true);
    op.className = "ov opener-ov"; op.dataset.ov = "opener";
    overlays.appendChild(op);
    document.querySelectorAll(".chapter").forEach(function (c) {
      var o = c.querySelector(".copy").cloneNode(true);
      o.className = "ov"; o.dataset.ov = c.dataset.chapter;
      overlays.appendChild(o);
    });
  }

  function vh() { return innerHeight / 100; }
  function scrollPos() {           // poziția în „vh” de la începutul scenei
    var top = section.getBoundingClientRect().top + scrollY;
    return Math.max(0, (scrollY - top) / vh());
  }
  function segAt(p) {
    for (var i = 0; i < segs.length; i++) if (p < segs[i].from + segs[i].vh) return i;
    return segs.length - 1;
  }
  function frameAt(p) {
    var s = segs[segAt(p)], f = films[s.film];
    if (s.type === "hold") return f.end;
    var t = Math.min(1, Math.max(0, (p - s.from) / s.vh));
    return f.start + Math.round(t * (f.count - 1));
  }

  function resize() {
    var dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(innerWidth * dpr);
    canvas.height = Math.round(innerHeight * dpr);
    shownIndex = -1;
  }

  function load(i) {
    if (bitmaps.has(i)) return Promise.resolve(bitmaps.get(i));
    if (pending.has(i)) return pending.get(i);
    var p = new Promise(function (res) {
      var img = new Image();
      img.decoding = "async";
      img.onload = function () {
        fetched.add(i);
        createImageBitmap(img).then(function (bm) { bitmaps.set(i, bm); pending.delete(i); evict(); res(bm); }, function () { pending.delete(i); res(null); });
      };
      img.onerror = function () { pending.delete(i); res(null); };
      img.src = frames[i];
    });
    pending.set(i, p);
    return p;
  }
  function evict() {
    if (bitmaps.size <= WINDOW * 2 + 10) return;
    bitmaps.forEach(function (bm, i) {
      if (Math.abs(i - shownIndex) > WINDOW) { bm.close(); bitmaps.delete(i); }
    });
  }
  function request(center) {
    queue = [center];
    for (var d = 1; d <= WINDOW; d++) { queue.push(center + d, center - d); }
    queue = queue.filter(function (i) { return i >= 0 && i < frames.length && !bitmaps.has(i) && !pending.has(i); });
    pump();
  }
  function pump() {
    while (active < MAX_PARALLEL && queue.length) {
      active++;
      load(queue.shift()).then(function () { active--; pump(); kick(); });
    }
  }
  function idlePrefetch() {            // aduce în cache-ul HTTP restul cadrelor, capitol cu capitol
    var order = [];
    for (var i = 0; i < frames.length; i++) order.push(i);
    var at = 0;
    function step(deadline) {
      var n = 0;
      while (at < order.length && n < 4) {
        var i = order[at++];
        if (!fetched.has(i)) { var im = new Image(); im.src = frames[i]; fetched.add(i); n++; }
      }
      if (at < order.length) {
        if (window.requestIdleCallback) requestIdleCallback(step, { timeout: 400 });
        else setTimeout(step, 120);
      }
    }
    step();
  }

  function draw(i) {
    var bm = bitmaps.get(i);
    if (!bm) {                          // cel mai apropiat cadru încărcat, ca imaginea să nu dispară
      var best = null, bd = 1e9;
      bitmaps.forEach(function (b, j) { var d = Math.abs(j - i); if (d < bd) { bd = d; best = b; } });
      bm = best;
      if (!bm) return;
    }
    var cw = canvas.width, ch = canvas.height, s = Math.max(cw / bm.width, ch / bm.height);
    var w = bm.width * s, h = bm.height * s;
    ctx.drawImage(bm, (cw - w) / 2, (ch - h) / 2, w, h);
    shownIndex = i;
    poster.style.visibility = "hidden";
  }

  function ramp(p, a, b, c, d) {       // 0 → 1 între a și b, 1 până la c, 1 → 0 până la d
    if (p <= a || p >= d) return 0;
    if (p < b) return (p - a) / (b - a);
    if (p <= c) return 1;
    return 1 - (p - c) / (d - c);
  }

  function updateText(p) {
    var current = null;
    var ovs = overlays.children;
    for (var k = 0; k < ovs.length; k++) {
      var o = ovs[k], a = 0;
      if (o.dataset.ov === "opener") {
        var f = segs[0];
        a = p < f.from + f.vh * 0.35 ? 1 - Math.max(0, (p - f.vh * 0.1) / (f.vh * 0.25)) : 0;
      } else {
        for (var s = 0; s < segs.length; s++) {
          var sg = segs[s];
          if (sg.type === "hold" && sg.chapter === o.dataset.ov) {
            var film = segs[s - 1], next = segs[s + 1];
            a = ramp(p, film.from + film.vh * 0.8, sg.from, sg.from + sg.vh, sg.from + sg.vh + (next ? next.vh * 0.15 : 1));
            if (a > 0.5) current = sg.chapter;
          }
        }
      }
      o.style.opacity = a.toFixed(3);
      o.style.setProperty("--scrim", a.toFixed(3));
      var dy = ((1 - a) * 12).toFixed(1);
      o.style.transform = o.classList.contains("opener-ov") ? "translate(-50%, " + (-dy) + "px)" : "translateY(" + dy + "px)";
    }
    chips.forEach(function (b) { b.setAttribute("aria-current", b.dataset.chip === current ? "true" : "false"); });
  }

  function kick() { targetPos = scrollPos(); if (!running) { running = true; requestAnimationFrame(tick); } }
  function tick() {
    curPos += (targetPos - curPos) * 0.2;
    if (Math.abs(targetPos - curPos) < 0.05) curPos = targetPos;
    var i = frameAt(curPos);
    if (!bitmaps.has(i)) request(i);
    if (i !== shownIndex) draw(i);
    updateText(curPos);
    if (curPos !== targetPos) requestAnimationFrame(tick); else running = false;
  }

  function jump(chapter) {
    for (var s = 0; s < segs.length; s++) {
      if (segs[s].type === "hold" && segs[s].chapter === chapter) {
        var f = films[segs[s].film];
        request(f.end);
        var top = section.getBoundingClientRect().top + scrollY;
        var y = top + (segs[s].from + 2) * vh();
        curPos = targetPos = segs[s].from + 2;
        scrollTo({ top: y, behavior: "instant" });
        load(f.end).then(function () { draw(f.end); });
        kick();
        return;
      }
    }
  }

  function wireStaticChips() {
    // Telefon (fără „mișcare redusă”): fiecare capitol își rulează clipul în buclă, fără sunet.
    if (!root.classList.contains("reduce")) {
      document.querySelectorAll(".chapter[data-film]").forEach(function (c) {
        var img = c.querySelector(".plate"), v = document.createElement("video");
        v.className = "plate-video"; v.muted = true; v.loop = true; v.playsInline = true;
        v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.preload = "none";
        v.poster = img.getAttribute("src"); v.setAttribute("aria-label", img.alt);
        var src = "assets/mobile/" + c.dataset.film + ".mp4";
        img.replaceWith(v);
        // sursa se pune abia când capitolul se apropie de ecran, ca prima încărcare să rămână mică
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              if (!v.getAttribute("src")) v.src = src;
              v.play().catch(function () {});
            } else { v.pause(); }
          });
        }, { rootMargin: "300px" }).observe(v);
      });
    }
    document.querySelectorAll("[data-chip]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.dataset.chip);
        if (el) el.scrollIntoView({ block: "start" });
      });
    });
  }
})();

/* The Way — minimal progressive enhancement.
   Everything works without JS; this adds theme persistence, copy-link, reveals. */
(function () {
  'use strict';

  /* theme (init is done inline in <head> to avoid flash) */
  var btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theway-theme', next); } catch (e) {}
      btn.setAttribute('aria-label', 'Switch to ' + (next === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }

  /* close mobile menu after navigation */
  document.querySelectorAll('.menu-panel a').forEach(function (a) {
    a.addEventListener('click', function () {
      var menu = a.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });

  /* copy link to section */
  var live = document.getElementById('copy-live');
  function announce(msg) { if (live) live.textContent = msg; }
  function legacyCopy(text, id, title) {
    var ok = false;
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      ok = document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) { ok = false; }
    if (ok) { announce('Link copied for “' + title + '”'); return; }
    location.hash = id;
    announce('Link address shown in the address bar: ' + text);
  }
  document.querySelectorAll('.anchor-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-anchor');
      var title = b.getAttribute('data-title');
      var url = location.origin + location.pathname + '#' + id;
      var done = function () {
        announce('Link copied for “' + title + '”');
        b.classList.add('copied');
        setTimeout(function () { b.classList.remove('copied'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () { legacyCopy(url, id, title); });
      } else {
        legacyCopy(url, id, title);
      }
    });
  });

  /* gentle section reveals */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();

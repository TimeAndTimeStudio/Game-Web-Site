/* =============================================
   TIME AND TIME STUDIO — main.js
   ============================================= */

(function () {
  'use strict';

  /* ─── 1. ACTIVE NAV LINK ─────────────────────── */
  function setActiveNav() {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav__links a, .nav__mobile a');
    links.forEach(function (link) {
      var linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ─── 2. SMOOTH SCROLL ───────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h'), 10) || 64;
      var top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }

  /* ─── 3. MOBILE NAV TOGGLE ───────────────────── */
  function initMobileNav() {
    var burger = document.querySelector('.nav__burger');
    var mobileNav = document.querySelector('.nav__mobile');
    if (!burger || !mobileNav) return;
    burger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      });
    });
    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ─── 4. BILINGUAL SYSTEM (EN / TH) ──────────── */
  var LANG_KEY = 'tat_lang';

  function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = lang === 'th' ? el.getAttribute('data-th') : el.getAttribute('data-en');
      if (text !== null) {
        el.innerHTML = text;
      }
    });

    document.documentElement.setAttribute('lang', lang === 'th' ? 'th' : 'en');

    // Re-render game cards first (they have translatable content)
    if (document.querySelector('#featured-container')) renderGameCards(GAMES, '#featured-container');
    if (document.querySelector('#games-container'))   renderGameCards(GAMES, '#games-container');

    // Update slider after paint so offsetWidth is accurate
    updateToggleUI(lang);

    localStorage.setItem(LANG_KEY, lang);
  }

  /* ─── 5. LANG TOGGLE — pill slider ───────────── */
  function buildLangToggles() {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.innerHTML =
        '<span class="lang-toggle__option" data-lang="en">EN</span>' +
        '<span class="lang-toggle__divider" aria-hidden="true"></span>' +
        '<span class="lang-toggle__option" data-lang="th">TH</span>';
    });
  }

  function updateToggleUI(lang) {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var enOpt = btn.querySelector('[data-lang="en"]');
      var thOpt = btn.querySelector('[data-lang="th"]');
      if (!enOpt || !thOpt) return;

      var activeOpt   = lang === 'th' ? thOpt : enOpt;
      var inactiveOpt = lang === 'th' ? enOpt : thOpt;

      activeOpt.classList.add('lang-toggle__option--active');
      inactiveOpt.classList.remove('lang-toggle__option--active');

      btn.setAttribute('aria-label', lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
      btn.setAttribute('data-current', lang);
    });
  }

  function initLangToggle() {
    buildLangToggles();

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = getCurrentLang() === 'en' ? 'th' : 'en';
        applyLang(next);
      });
    });

    applyLang(getCurrentLang());
  }

  /* ─── 6. GAME CARD RENDERER ──────────────────── */
  function renderGameCards(games, containerSelector) {
    var container = document.querySelector(containerSelector);
    if (!container) return;
    var lang = getCurrentLang();
    container.innerHTML = '';
    games.forEach(function (game) {
      var article = document.createElement('article');
      article.className = 'game-card';
      var title = game.title;
      var desc  = lang === 'th' ? game.descTh : game.descEn;
      var btn   = lang === 'th' ? 'ดูรายละเอียด' : 'View Details';
      var cardBanner = game.cardImg
        ? '<img src="' + game.cardImg + '" alt="' + title + '" class="game-card__banner" style="object-fit:cover;">'
        : ['<div class="game-card__banner placeholder">',
           '  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="opacity:0.35"><rect x="10" y="28" width="28" height="12" rx="3" fill="currentColor"/><path d="M12 28C12 19.163 17.373 12 24 12C30.627 12 36 19.163 36 28H12Z" fill="currentColor"/></svg>',
           '  <span>' + (game.bannerAlt || 'Game Banner') + '</span>',
           '</div>'].join('');
      article.innerHTML = [
        cardBanner,
        '<div class="game-card__body">',
        '  <p class="game-card__studio">Time And Time Studio</p>',
        '  <h3 class="game-card__title">' + title + '</h3>',
        '  <p class="game-card__desc">' + desc + '</p>',
        '  <div class="game-card__footer">',
        '    <a href="' + game.detailHref + '" class="btn btn--primary">' + btn + '</a>',
        '  </div>',
        '</div>',
      ].join('');
      container.appendChild(article);
    });
  }

  /* ─── 7. GAME DATA ───────────────────────────── */
  var GAMES = [
    {
      title: 'Battle Mushroom',
      cardImg: 'assets/battle-mushroom-card.png',
      descEn: "One day, a group of mushrooms was stepped on. Feeling stressed and vengeful, they began invading other plants and species. Because of this, other plants and living creatures had to come together to defend against the mushroom group's invasion.",
      descTh: 'ในวันหนึ่ง มีเห็ดกลุ่มหนึ่งโดนเหยียบ แล้วทำให้เห็ดกลุ่มนั้นเครียดแค้นจึงไปรุกรานพืชพันธุ์อื่น และสิ่งมีชีวิตสายพันธุ์อื่นๆ ด้วยเหตุนี้จึงทำให้พืชพันธุ์ และสิ่งมีชีวิตสายพันธุ์อื่นๆ ต้องมารวมตัวกันเพื่อป้องกันการรุกรานของเห็ดกลุ่มนั้น',
      bannerAlt: 'Battle Mushroom — Game Banner',
      detailHref: 'game-battle-mushroom.html',
    },
    // ── ADD NEW GAMES BELOW ──
    // { title: '...', cardImg: 'assets/....png', descEn: '...', descTh: '...', bannerAlt: '...', detailHref: '...' },
  ];

  /* ─── 8. SCROLL REVEAL ───────────────────────── */
  function initScrollReveal() {
    var style = document.createElement('style');
    style.textContent = [
      '.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }',
      '.reveal.visible { opacity: 1; transform: none; }',
    ].join('');
    document.head.appendChild(style);
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─── INIT ───────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initSmoothScroll();
    initMobileNav();
    initScrollReveal();
    initLangToggle();

    if (document.querySelector('#featured-container')) renderGameCards(GAMES, '#featured-container');
    if (document.querySelector('#games-container'))   renderGameCards(GAMES, '#games-container');
  });

  window.TAT = { renderGameCards: renderGameCards, GAMES: GAMES, applyLang: applyLang, getCurrentLang: getCurrentLang };
})();

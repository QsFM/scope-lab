/* SCOPE Lab homepage — vanilla JS, no dependencies */
(function () {
  'use strict';
  var L = window.LAB;
  var root = document.documentElement;
  var lang = root.getAttribute('lang') === 'en' ? 'en' : 'ko';
  var pubFilter = 'all';

  /* ---------- UI strings ---------- */
  var UI = {
    skip: { ko: '본문 바로가기', en: 'Skip to content' },
    nav_about: { ko: '소개', en: 'About' },
    nav_pi: { ko: '지도교수', en: 'Professor' },
    pi_h: { ko: '지도교수', en: 'Principal Investigator' },
    pi_edu: { ko: '학력', en: 'Education' },
    pi_career: { ko: '경력', en: 'Professional Experience' },
    pi_activities: { ko: '학술 활동', en: 'Professional Activities' },
    pi_awards: { ko: '수상', en: 'Awards' },
    nav_research: { ko: '연구', en: 'Research' },
    nav_pubs: { ko: '논문', en: 'Publications' },
    nav_members: { ko: '구성원', en: 'People' },
    nav_news: { ko: '소식', en: 'News' },
    nav_join: { ko: '지원', en: 'Join' },
    nav_contact: { ko: '연락처', en: 'Contact' },
    hero_eyebrow: { ko: '연구실 · Research Laboratory', en: 'Research Laboratory' },
    hero_lead: {
      ko: '확률적 계산과 최적화로 전자기파 디자인과 반도체/에너지 공정의 한계를 넘습니다.',
      en: 'We push past the limits of electromagnetic design and semiconductor/energy processes with stochastic computing and optimization.'
    },
    hero_cta1: { ko: '연구 분야 보기', en: 'Explore research' },
    hero_cta2: { ko: '함께 연구하기', en: 'Join us' },
    about_h: { ko: '시뮬레이션과 실제 사이의 간극을 줄입니다', en: 'Closing the gap between simulation and reality' },
    about_p1: {
      ko: '우리는 계산 지능과 물리 세계 사이의 간극을 메웁니다. 확률론적 컴퓨팅과 기계학습으로 전자기파 디자인과 반도체/에너지 공정의 복잡한 최적화 문제를 풉니다.',
      en: 'We bridge the gap between computational intelligence and the physical world. We use stochastic computing and machine learning to solve complex optimization problems in electromagnetic design and semiconductor/energy processes.'
    },
    about_p2: {
      ko: '시뮬레이터가 있으면 시뮬레이션으로, 없으면 실험 데이터로, 때로는 둘을 결합하여 확률론적 모델을 만들고 설계와 공정을 최적화합니다.',
      en: 'Whether we start from a simulator, from experiments, or from both, we build stochastic models from the data we have and use them to optimize designs and processes.'
    },
    research_h: { ko: '연구 분야', en: 'Research Areas' },
    pubs_h: { ko: '대표 성과', en: 'Selected Publications' },
    members_h: { ko: '구성원', en: 'People' },
    news_h: { ko: '연구실 소식', en: 'Lab News' },
    join_h: { ko: '전기·전자공학·물리학 배경을 가진 학생을 모집합니다.', en: 'We welcome students with an electrical engineering/physics background'  },
    join_p: {
      ko: '전자기학, 반도체공정, 최적화, 양자정보에 관심이 있는 학부 연구생과 대학원생을 환영합니다. 먼저 메일로 연락 주세요.',
      en: 'Undergraduate researchers and graduate students interested in electromagnetics, semiconductor processes, optimization, and quantum information are welcome. Please send us an email first.'
    },
    join_cta: { ko: '지원 문의하기', en: 'Contact us' },
    contact_h: { ko: '오시는 길 · 연락처', en: 'Location & Contact' },
    top: { ko: '맨 위로', en: 'Back to top' },
    all: { ko: '전체', en: 'All' },
    journal: { ko: '학술지', en: 'Journal' },
    conference: { ko: '학회', en: 'Conference' },
    noPubs: { ko: '등록된 논문이 없습니다.', en: 'No publications yet.' },
    g_pi: { ko: '지도교수', en: 'Principal Investigator' },
    g_phd: { ko: '박사과정', en: 'Ph.D. Students' },
    g_ms: { ko: '석사과정', en: 'M.S. Students' },
    g_intern: { ko: '학부 연구생', en: 'Undergraduate Researchers' },
    g_alumni: { ko: '졸업생', en: 'Alumni' },
    al_name: { ko: '이름', en: 'Name' },
    al_year: { ko: '졸업', en: 'Year' },
    al_degree: { ko: '학위', en: 'Degree' },
    al_now: { ko: '현재 직장', en: 'Current Position' }
  };

  function tr(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return o[lang] || o.ko || o.en || '';
  }
  function ui(k) { return UI[k] ? tr(UI[k]) : k; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) { return /^(https?:|mailto:|assets\/|\.\/|#)/i.test(u) ? u : ''; }
  /* real address (contains @) -> clickable mail link; "name [at] univ.ac.kr" -> plain text */
  function isMail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e || '').trim()); }
  function $(s) { return document.querySelector(s); }

  /* ---------- icons ---------- */
  var ICON = {
    bayes: '<path d="M3 20h18M5 20c1-9 3-14 7-14s6 5 7 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="6" r="1.6" fill="currentColor"/>',
    quantum: '<ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" fill="none" stroke="currentColor" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/>',
    wave: '<path d="M2 12c2.5-7 4.5-7 7 0s4.5 7 7 0 3-5 6-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    process: '<rect x="4" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="4" y="13" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="13" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/>'
  };

  /* ---------- renderers ---------- */
  function renderStats() {
    $('#stats').innerHTML = (L.stats || []).map(function (s) {
      return '<li><strong>' + esc(s.value) + '</strong><span>' + esc(tr(s.label)) + '</span></li>';
    }).join('');
  }

  function renderResearch() {
    $('#researchCards').innerHTML = (L.research || []).map(function (r) {
      return '<article class="card reveal"><div class="ico"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">' +
        (ICON[r.icon] || ICON.wave) + '</svg></div><h3>' + esc(tr(r.title)) + '</h3><p>' + esc(tr(r.text)) +
        '</p><div class="tags">' + (r.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
        '</div></article>';
    }).join('');
  }

  function fmtAuthors(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function renderPubs() {
    var types = ['all', 'journal', 'conference'];
    $('#pubFilters').innerHTML = types.map(function (t) {
      return '<button type="button" role="tab" data-t="' + t + '" aria-selected="' + (t === pubFilter) + '">' + esc(ui(t)) + '</button>';
    }).join('');

    var list = (L.publications || []).filter(function (p) { return pubFilter === 'all' || p.type === pubFilter; })
      .sort(function (a, b) { return b.year - a.year; });
    if (!list.length) { $('#pubList').innerHTML = '<p class="empty">' + esc(ui('noPubs')) + '</p>'; return; }

    var html = '', cur = null;
    list.forEach(function (p) {
      if (p.year !== cur) { cur = p.year; html += '<h3 class="year">' + esc(cur) + '</h3>'; }
      var links = '';
      var doi = p.doi ? 'https://doi.org/' + encodeURI(p.doi) : '';
      var href = safeUrl(p.link || '') || doi;
      if (href) links += '<a class="lk" href="' + esc(href) + '" target="_blank" rel="noopener">' + (p.doi ? 'DOI' : 'Link') + ' ↗</a>';
      var head = p.title ? '<h4>' + esc(p.title) + '</h4><p class="au">' + fmtAuthors(p.authors || '') + '</p>' : '<h4>' + fmtAuthors(p.authors || '') + '</h4>';
      html += '<div class="pub"><span class="badge">' + esc(ui(p.type)) + '</span><div>' + head + '<p class="vn">' + esc(p.venue || '') + ' ' + esc(p.year) + '</p>' + links + '</div></div>';
    });
    $('#pubList').innerHTML = html;
  }

  function initials(name) {
    var n = (name || '?').replace(/^\[[^\]]*\]\s*/, '').trim();
    return esc(n.charAt(0).toUpperCase());
  }
  function avatar(m, cls) {
    var nm = tr(m.name).replace(/^\[[^\]]*\]\s*/, '');
    var photo = safeUrl(m.photo || '');
    if (photo) return '<img class="avatar" src="' + esc(photo) + '" alt="' + esc(nm) + '" loading="lazy">';
    return '<div class="avatar" aria-hidden="true">' + initials(tr(m.name)) + '</div>';
  }
  function contactLinks(m) {
    var h = '';
    if (m.email) h += isMail(m.email) ? '<a href="mailto:' + esc(m.email) + '">' + esc(m.email) + '</a>' : esc(m.email);
    var l = safeUrl(m.link || '');
    if (l) h += (h ? '<br>' : '') + '<a href="' + esc(l) + '" target="_blank" rel="noopener">Homepage ↗</a>';
    return h;
  }
  function renderAlumni() {
    var ms = (L.members || []).filter(function (m) { return m.group === 'alumni'; });
    if (!ms.length) return '';
    ms = ms.slice().sort(function (a, b) { return String(b.year || '').localeCompare(String(a.year || '')); });
    var rows = ms.map(function (m) {
      return '<tr><td data-l="' + esc(ui('al_name')) + '">' + esc(tr(m.name)) + '</td>' +
        '<td data-l="' + esc(ui('al_year')) + '">' + esc(m.year || '') + '</td>' +
        '<td data-l="' + esc(ui('al_degree')) + '">' + esc(tr(m.degree)) + '</td>' +
        '<td data-l="' + esc(ui('al_now')) + '">' + esc(tr(m.now)) + '</td></tr>';
    }).join('');
    return '<div class="grp reveal"><h3>' + esc(ui('g_alumni')) + '</h3><div class="alumni-wrap"><table class="alumni"><thead><tr>' +
      '<th>' + esc(ui('al_name')) + '</th><th>' + esc(ui('al_year')) + '</th><th>' + esc(ui('al_degree')) + '</th><th>' + esc(ui('al_now')) + '</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
  }
  function renderMembers() {
    var order = ['phd', 'ms', 'intern', 'alumni'];
    var html = '';
    order.forEach(function (g) {
      if (g === 'alumni') { html += renderAlumni(); return; };
      var ms = (L.members || []).filter(function (m) { return m.group === g; });
      if (!ms.length) return;
      html += '<div class="grp reveal"><h3>' + esc(ui('g_' + g)) + '</h3><div class="people">' + ms.map(function (m) {
        return '<div class="person">' + avatar(m) + '<h4>' + esc(tr(m.name)) + '</h4><p class="role">' + esc(tr(m.role)) +
          '</p><p class="int">' + esc(tr(m.interest)) + '</p>' + contactLinks(m) + '</div>';
      }).join('') + '</div></div>';
    });
    $('#memberList').innerHTML = html;
  }

  function renderPI() {
    var P = L.pi || {};
    var nm = tr(P.name).replace(/^\[[^\]]*\]\s*/, '');
    var photo = safeUrl(P.photo || '');
    var h = photo ? '<img class="prof-photo" src="' + esc(photo) + '" alt="' + esc(nm) + '" loading="lazy">'
                  : '<div class="prof-photo" aria-hidden="true">' + initials(tr(P.name)) + '</div>';
    h += '<div><h3>' + esc(tr(P.name)) + '</h3><p class="role">' + esc(tr(P.role)) + '</p><p class="aff">' + esc(tr(L.affiliation)) + '</p>';
    if (tr(P.bio)) h += '<p class="bio">' + esc(tr(P.bio)) + '</p>';
    if (P.interests && P.interests.length) h += '<div class="tags">' + P.interests.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>';
    function col(key, arr) {
      if (!arr || !arr.length) return '';
      return '<div><h4>' + esc(ui(key)) + '</h4><ul>' + arr.map(function (x) {
        return '<li><span>' + esc(x.period || '') + '</span><div>' + esc(tr(x.text)) + '</div></li>';
      }).join('') + '</ul></div>';
    }
    var cols = col('pi_edu', P.education) + col('pi_career', P.career);
    if (cols) h += '<div class="prof-cols">' + cols + '</div>';
    var aw = col('pi_awards', P.awards)+col('pi_activities', P.activities);
    if (aw) h += '<div class="prof-cols two">' + aw + '</div>';
    var links = [];
    if (P.email) links.push(isMail(P.email) ? '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a>' : '<span>' + esc(P.email) + '</span>');
    (P.links || []).forEach(function (l) {
      var u = safeUrl(l.url || '');
      if (u) links.push('<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(l.label) + ' ↗</a>');
    });
    if (links.length) h += '<div class="prof-links">' + links.join('') + '</div>';
    $('#profBox').innerHTML = h + '</div>';
  }

  function renderTopics() {
    $('#topics').innerHTML = (L.topics || []).map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('');
  }

  function renderNews() {
    $('#newsList').innerHTML = (L.news || []).map(function (n) {
      return '<li class="reveal"><time datetime="' + esc(n.date) + '">' + esc(n.date) + '</time><p>' + esc(tr(n.text)) + '</p></li>';
    }).join('');
  }

  function renderContact() {
    $('#contactList').innerHTML = (L.contact || []).map(function (c) {
      var v = esc(tr(c.value));
      if (c.mail && isMail(tr(c.value))) v = '<a href="mailto:' + esc(tr(c.value)) + '">' + v + '</a>';
      else if (c.url && safeUrl(c.url)) v = '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + v + ' ↗</a>';
      return '<dt>' + esc(tr(c.label)) + '</dt><dd>' + v + '</dd>';
    }).join('');
    $('#joinMail').setAttribute('href', isMail(L.email) ? 'mailto:' + L.email : '#contact');
    $('#copyright').textContent = '© ' + L.copyrightYear + ' SCOPE Lab. ' + tr(L.affiliation);
  }

  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (UI[k]) el.textContent = tr(UI[k]);
    });
    $('#langBtn').textContent = lang === 'ko' ? 'EN' : 'KO';
    root.setAttribute('lang', lang);
  }

  function renderAll() {
    applyStatic(); renderStats(); renderTopics(); renderPI(); renderResearch(); renderPubs();
    renderMembers(); renderNews(); renderContact(); observe();
  }

  /* ---------- interactions ---------- */
  $('#langBtn').addEventListener('click', function () {
    lang = lang === 'ko' ? 'en' : 'ko';
    try { localStorage.setItem('scope-lang', lang); } catch (e) {}
    renderAll();
  });
  $('#themeBtn').addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('scope-theme', t); } catch (e) {}
  });
  $('#pubFilters').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-t]');
    if (!b) return;
    pubFilter = b.getAttribute('data-t');
    renderPubs();
  });
  var burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  var nav = $('#nav');
  function onScroll() { nav.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal on scroll */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function observe() {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  /* active menu link */
  var links = Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }

  /* ---------- hero animation: a lattice of cells relaxing toward a pattern ----------
     Each cell is a binary "unit cell" (like a metasurface or an Ising spin).
     A slowly cycling temperature adds random flips, then cools so the cells settle
     into a target pattern — an image of annealing-based design.                     */
  (function hero() {
    var cv = $('#heroCanvas');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W, H, cols, rows, size = 26, gap = 4, cells, target, mx = -999, my = -999, t = 0, raf;

    function pattern(c, r, phase) {
      var cx = cols * 0.72, cy = rows * 0.5;
      var d = Math.hypot(c - cx, (r - cy) * 1.1);
      return Math.sin(d * 0.55 - phase) > 0 ? 1 : 0;
    }
    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = W < 600 ? 20 : 26;
      cols = Math.ceil(W / (size + gap)); rows = Math.ceil(H / (size + gap));
      cells = new Uint8Array(cols * rows);
      for (var i = 0; i < cells.length; i++) cells[i] = Math.random() < 0.5 ? 1 : 0;
      draw();
    }
    function step() {
      t += 0.012;
      var temp = 0.5 + 0.5 * Math.sin(t * 0.8);         // 0 (cold) .. 1 (hot)
      var phase = t * 1.5;
      var flips = Math.ceil(cells.length * 0.02);
      for (var k = 0; k < flips; k++) {
        var i = (Math.random() * cells.length) | 0;
        var c = i % cols, r = (i / cols) | 0;
        var want = pattern(c, r, phase);
        var p = 0.25 + 0.6 * temp;                       // chance of a random (thermal) flip
        cells[i] = Math.random() < p ? (Math.random() < 0.5 ? 1 : 0) : want;
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var x = c * (size + gap), y = r * (size + gap);
          var on = cells[r * cols + c];
          var d = Math.hypot(x - mx, y - my);
          var boost = d < 140 ? (1 - d / 140) : 0;
          var a = on ? 0.38 + boost * 0.5 : 0.07 + boost * 0.25;
          ctx.fillStyle = on ? 'rgba(34,211,238,' + a + ')' : 'rgba(147,170,215,' + a + ')';
          ctx.fillRect(x, y, size, size);
        }
      }
    }
    function loop() { step(); draw(); raf = requestAnimationFrame(loop); }
    window.addEventListener('resize', resize);
    cv.parentElement.addEventListener('pointermove', function (e) {
      var b = cv.getBoundingClientRect(); mx = e.clientX - b.left; my = e.clientY - b.top;
    });
    resize();
    if (reduce) { for (var i = 0; i < 60; i++) step(); draw(); return; }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(loop);
    });
    loop();
  })();

  renderAll();
})();

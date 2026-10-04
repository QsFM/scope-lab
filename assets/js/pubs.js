/* SCOPE Lab — 논문 목록 (대표 논문 + 연도별 접기 + 검색 + 필터)
   데이터는 pubs-data.js 에서 읽어 옵니다. 이 파일은 보통 고칠 필요가 없습니다. */
(function () {
  'use strict';
  var app = document.querySelector('#pubApp');
  var ALL = window.PUBS || [];
  if (!app) return;

  var VISIBLE = ALL.filter(function (p) { return !p.hide; });
  var state = { q: '', type: 'all', topic: 'all' };

  var UI = {
    search: { ko: '제목, 저자, 학술지 검색', en: 'Search title, author, venue' },
    featured: { ko: '대표 논문', en: 'Selected Publications' },
    all: { ko: '전체 논문', en: 'All Publications' },
    count: { ko: '편', en: ' papers' },
    none: { ko: '조건에 맞는 논문이 없습니다.', en: 'No publications match.' },
    reset: { ko: '필터 초기화', en: 'Reset filters' },
    scholar: { ko: 'Scholar에서 보기', en: 'View on Scholar' },
    t_all: { ko: '전체', en: 'All' },
    t_journal: { ko: '학술지', en: 'Journal' },
    t_conference: { ko: '학회', en: 'Conference' },
    t_preprint: { ko: '프리프린트', en: 'Preprint' },
    t_other: { ko: '기타', en: 'Other' },
    k_all: { ko: '전체 분야', en: 'All topics' },
    k_ai: { ko: 'AI · 최적화', en: 'AI & Optimization' },
    k_quantum: { ko: '양자 컴퓨팅', en: 'Quantum' },
    k_em: { ko: '전자기 · 광학', en: 'EM & Optics' },
    k_process: { ko: '소자 · 에너지 · 공정', en: 'Devices, Energy & Process' }
  };
  var TYPES = ['all', 'journal', 'conference', 'preprint', 'other'];
  var TOPICS = ['all', 'ai', 'quantum', 'em', 'process'];

  function lang() { return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'ko'; }
  function t(k) { return UI[k] ? UI[k][lang()] : k; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) { return /^(https?:|assets\/|\.\/)/i.test(u || '') ? u : ''; }
  function fmtAuthors(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function plain(p) { return (p.title + ' ' + p.authors + ' ' + p.venue + ' ' + p.year).replace(/\*\*/g, '').toLowerCase(); }

  function matches(p) {
    if (state.type !== 'all' && p.type !== state.type) return false;
    if (state.topic !== 'all' && (p.tags || []).indexOf(state.topic) < 0) return false;
    if (state.q) {
      var hay = plain(p);
      return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
    }
    return true;
  }

  function entry(p) {
    var links = '';
    var href = safeUrl(p.link) || (p.doi ? 'https://doi.org/' + encodeURI(p.doi) : '');
    if (href) links += '<a class="lk" href="' + esc(href) + '" target="_blank" rel="noopener">' + (p.doi ? 'DOI' : 'Link') + ' ↗</a>';
    links += '<a class="lk" href="https://scholar.google.com/scholar?q=' + encodeURIComponent(p.title) + '" target="_blank" rel="noopener">' + esc(t('scholar')) + ' ↗</a>';
    return '<div class="pub"><span class="badge">' + esc(t('t_' + p.type)) + '</span><div><h4>' + esc(p.title) +
      '</h4><p class="au">' + fmtAuthors(p.authors) + '</p><p class="vn">' + esc(p.venue) + ' (' + esc(p.year) + ')</p>' + links + '</div></div>';
  }

  function sorted(list) {
    return list.slice().sort(function (a, b) { return b.year - a.year; });
  }

  function renderResults() {
    var box = document.querySelector('#pubResults');
    var list = sorted(VISIBLE.filter(matches));
    var filtering = !!(state.q || state.type !== 'all' || state.topic !== 'all');
    document.querySelector('#pubCount').textContent = list.length + ' / ' + VISIBLE.length + t('count');

    if (!list.length) {
      box.innerHTML = '<p class="empty">' + esc(t('none')) + '</p>';
      return;
    }
    var html = '';
    if (!filtering) {
      var feat = sorted(VISIBLE.filter(function (p) { return p.featured; }));
      if (feat.length) html += '<h3 class="pubx-h">' + esc(t('featured')) + '</h3><div class="pubx-feat">' + feat.map(entry).join('') + '</div>';
      html += '<h3 class="pubx-h">' + esc(t('all')) + '</h3>';
    }
    var years = [], byYear = {};
    list.forEach(function (p) {
      if (!byYear[p.year]) { byYear[p.year] = []; years.push(p.year); }
      byYear[p.year].push(p);
    });
    years.forEach(function (y, i) {
      var open = filtering || i === 0;
      html += '<details class="pubx-year"' + (open ? ' open' : '') + '><summary>' + esc(y) + ' <small>' + byYear[y].length + t('count') + '</small></summary>' +
        byYear[y].map(entry).join('') + '</details>';
    });
    box.innerHTML = html;
  }

  function renderChips() {
    document.querySelector('#pubTypes').innerHTML = TYPES.map(function (k) {
      return '<button type="button" data-type="' + k + '" aria-pressed="' + (state.type === k) + '">' + esc(t('t_' + k)) + '</button>';
    }).join('');
    document.querySelector('#pubTopics').innerHTML = TOPICS.map(function (k) {
      return '<button type="button" data-topic="' + k + '" aria-pressed="' + (state.topic === k) + '">' + esc(t('k_' + k)) + '</button>';
    }).join('');
  }

  function build() {
    app.innerHTML =
      '<div class="pubx-bar"><input id="pubQ" type="search" value="' + esc(state.q) + '" placeholder="' + esc(t('search')) + '" aria-label="' + esc(t('search')) + '">' +
      '<span class="pubx-count" id="pubCount"></span><button type="button" class="pubx-reset" id="pubReset">' + esc(t('reset')) + '</button></div>' +
      '<div class="pubx-chips" id="pubTypes"></div><div class="pubx-chips" id="pubTopics"></div><div id="pubResults"></div>';
    renderChips();
    renderResults();
  }

  app.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'pubQ') {
      state.q = e.target.value.trim().toLowerCase();
      renderResults();
    }
  });
  app.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('button') : null;
    if (!b) return;
    if (b.id === 'pubReset') { state = { q: '', type: 'all', topic: 'all' }; build(); return; }
    if (b.hasAttribute('data-type')) state.type = b.getAttribute('data-type');
    else if (b.hasAttribute('data-topic')) state.topic = b.getAttribute('data-topic');
    else return;
    renderChips();
    renderResults();
  });

  var lb = document.querySelector('#langBtn');
  if (lb) lb.addEventListener('click', function () { setTimeout(build, 0); });

  window.SCOPE_PUBS = { state: function () { return state; }, set: function (s) { state = Object.assign(state, s); renderChips(); renderResults(); }, build: build };
  build();
})();

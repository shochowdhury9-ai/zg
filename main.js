// Preloader
window.addEventListener('load', () => setTimeout(() => document.getElementById('preloader').classList.add('done'), 2200));

// Mobile menu
const menu = document.getElementById('menu');
document.getElementById('menuBtn').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// Scroll progress + cursor glow
const bar = document.querySelector('#progress span');
addEventListener('scroll', () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
});
const glow = document.getElementById('glow');
addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

// Starfield
(() => {
  const c = document.getElementById('stars'), x = c.getContext('2d');
  let W, H, stars = [];
  const init = () => {
    W = c.width = innerWidth; H = c.height = innerHeight;
    stars = Array.from({ length: 110 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + .2, s: Math.random() * .25 + .05, p: Math.random() * 6 }));
  };
  init(); addEventListener('resize', init);
  (function draw(t) {
    x.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.y += s.s; if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
      x.globalAlpha = .4 + .6 * Math.abs(Math.sin(t / 900 + s.p));
      x.fillStyle = '#ffe2a8'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.3); x.fill();
    });
    requestAnimationFrame(draw);
  })(0);
})();

// Counters
const counters = document.querySelectorAll('[data-count]');
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count; let n = 0;
  const step = Math.max(1, Math.round(end / 60));
  const id = setInterval(() => { n = Math.min(end, n + step); el.textContent = n; if (n >= end) clearInterval(id); }, 25);
  cio.unobserve(el);
}), { threshold: .6 });
counters.forEach(c => cio.observe(c));

// Reveal on scroll
const rio = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 });
const observeReveal = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => rio.observe(el));

// Films
document.getElementById('filmRows').innerHTML = FILMS.map(f => `<tr><td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td></tr>`).join('');

// Songs: filters + search + expandable cards
let era = 'all', q = '';
const chipBox = document.getElementById('eraFilters');
chipBox.innerHTML = ERAS.map(e => `<button data-e="${e.id}" class="${e.id === 'all' ? 'on' : ''}">${e.label}</button>`).join('');
chipBox.onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  era = b.dataset.e;
  chipBox.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  renderSongs();
};
document.getElementById('songSearch').oninput = e => { q = e.target.value.toLowerCase(); renderSongs(); };

function renderSongs() {
  const list = SONGS.filter(s => (era === 'all' || s.era === era) &&
    (!q || (s.title + ' ' + s.note).toLowerCase().includes(q)));
  const box = document.getElementById('timelineSongs');
  box.innerHTML = list.length ? list.map(s => {
    const link = 'https://www.youtube.com/results?search_query=' + encodeURIComponent('Zubeen Garg ' + s.title.replace(/\(.*?\)/g, ''));
    return `<div class="song reveal">
      <header>
        <span class="yr ${s.year ? '' : 'na'}">${s.year || 'year to verify'}</span>
        <h4>${s.title}</h4>
        <span class="eqv"><i></i><i></i><i></i></span>
        <span class="pill">${s.type}</span>
      </header>
      <div class="more"><p>${s.note}</p><a href="${link}" target="_blank" rel="noopener">Search on YouTube &rarr;</a></div>
    </div>`;
  }).join('') : '<p class="lead">No matches.</p>';
  box.querySelectorAll('.song').forEach(el => el.onclick = () => el.classList.toggle('open'));
  observeReveal();
}
renderSongs();

// Gallery + lightbox
const gg = document.getElementById('galleryGrid');
gg.innerHTML = GALLERY.map((g, i) => `
  <figure class="shot reveal" data-i="${i}">
    <img src="${g.src}" alt="${g.caption}" loading="lazy" onerror="this.remove()">
    <div class="ph"><b>&#x1F531;</b>Add photo<br><code>${g.src}</code></div>
    <figcaption>${g.caption}<br><small>${g.credit}</small></figcaption>
  </figure>`).join('');
const lb = document.getElementById('lightbox');
gg.onclick = e => {
  const f = e.target.closest('.shot'); const img = f && f.querySelector('img'); if (!img) return;
  lb.querySelector('img').src = img.src; lb.querySelector('p').textContent = GALLERY[f.dataset.i].caption + ' — ' + GALLERY[f.dataset.i].credit;
  lb.hidden = false;
};
lb.onclick = () => lb.hidden = true;

// Case: tabs, timeline, accused
document.getElementById('caseTabs').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#caseTabs button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === b.dataset.tab));
};
const tagName = { sg: 'Singapore', as: 'Assam', pub: 'Public' };
document.getElementById('caseTimeline').innerHTML = CASE_TIMELINE.map(e =>
  `<div class="ev ${e.tag}"><b>${e.date}</b><small>${tagName[e.tag]}</small><p>${e.text}</p></div>`).join('');
document.getElementById('accusedGrid').innerHTML = ACCUSED.map(a => `
  <article class="card"><h3>${a.name}</h3>
    <div class="tagrow">${a.role}</div>
    <p><b>Charges framed:</b> ${a.charges}</p>
    <p style="margin-top:8px"><b>Prosecution allegation:</b> ${a.alleg}</p>
    <p class="fine">Allegation — not a finding of guilt. Pleaded not guilty.</p></article>`).join('');

observeReveal();

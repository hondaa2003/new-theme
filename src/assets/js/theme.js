/* ─────────────────────────────────────
   نسمة — Nasma Theme JS
   Salla Twilight Engine Compatible
───────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL REVEAL ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


  // ─── PRODUCT TABS ───
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      // TODO: filter products by data-filter attribute via Salla events
    });
  });


  // ─── COUNTDOWN TIMER ───
  const countdownEl = document.querySelector('[data-countdown]');
  if (countdownEl) {
    const endDate = new Date(countdownEl.dataset.countdown);
    const pad = n => String(n).padStart(2, '0');

    const update = () => {
      const diff = Math.max(0, endDate - Date.now());
      if (diff === 0) { clearInterval(timer); return; }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      const dEl = document.getElementById('cd-days');
      const hEl = document.getElementById('cd-hours');
      const mEl = document.getElementById('cd-mins');
      const sEl = document.getElementById('cd-secs');

      if (dEl) dEl.textContent = pad(d);
      if (hEl) hEl.textContent = pad(h);
      if (mEl) mEl.textContent = pad(m);
      if (sEl) sEl.textContent = pad(s);
    };

    update();
    const timer = setInterval(update, 1000);
  }


  // ─── MOBILE MENU ───
  const burger = document.querySelector('.burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      mobileMenu.style.display = isOpen ? 'block' : 'none';
    });
  }


  // ─── STICKY HEADER SHADOW ───
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

});


// ─── PRODUCT GALLERY ───
const galleryMain = document.getElementById('main-product-img');
if (galleryMain) {
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      galleryMain.src = thumb.dataset.img;
    });
  });
}

// ─── PRODUCT PAGE TABS ───
document.querySelectorAll('.product-tabs-nav .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const panelId = tab.getAttribute('aria-controls');
    document.querySelectorAll('.product-tabs-nav .tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(panelId);
    if (panel) { panel.classList.add('active'); panel.hidden = false; }
  });
});

// ─── VIEW TOGGLE (Grid / List) ───
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const grid = document.getElementById('products-grid');
    if (grid) grid.dataset.view = btn.dataset.view;
  });
});

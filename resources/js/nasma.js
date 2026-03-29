/* ══════════════════════════════════════════════
   NASMA THEME — nasma.js
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── Scroll Reveal ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ─── Mobile Menu ───
  const burger = document.getElementById('nasma-burger');
  const mobileMenu = document.getElementById('nasma-mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // ─── Countdown Timer ───
  const countdownEl = document.getElementById('nasma-countdown');
  if (countdownEl) {
    const endDateAttr = countdownEl.dataset.end;
    let endTime;

    if (endDateAttr && endDateAttr.trim() !== '') {
      endTime = new Date(endDateAttr).getTime();
    } else {
      // افتراضي: يومين و14 ساعة من الآن
      endTime = Date.now() + (2 * 86400 + 14 * 3600 + 37 * 60) * 1000;
    }

    const pad = n => String(n).padStart(2, '0');

    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
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

      if (diff === 0) clearInterval(timer);
    };

    tick();
    const timer = setInterval(tick, 1000);
  }

  // ─── Product Tabs ───
  document.querySelectorAll('.nasma-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nasma-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    });
  });

});

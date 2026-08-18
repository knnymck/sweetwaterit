'use client';

import { useEffect } from 'react';

export default function ScrollHeaderState() {
  useEffect(() => {
    const toggle = document.getElementById('mobile-menu-toggle') as HTMLInputElement | null;

    const syncScroll = () => {
      document.body.classList.toggle('has-fixed-topbar', window.scrollY > 12);
      document.body.classList.toggle('show-sticky', window.scrollY > 420 && window.innerWidth <= 860);
    };

    const syncMenu = () => {
      document.body.classList.toggle('mobile-menu-open', Boolean(toggle?.checked));
    };

    const closeMenuOnAnchor = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest('.main-nav a, .nav-cta, .wordmark')) return;
      if (toggle?.checked) {
        toggle.checked = false;
        syncMenu();
      }
    };

    syncScroll();
    syncMenu();
    window.addEventListener('scroll', syncScroll, { passive: true });
    toggle?.addEventListener('change', syncMenu);
    document.addEventListener('click', closeMenuOnAnchor);

    return () => {
      window.removeEventListener('scroll', syncScroll);
      toggle?.removeEventListener('change', syncMenu);
      document.removeEventListener('click', closeMenuOnAnchor);
      document.body.classList.remove('has-fixed-topbar', 'mobile-menu-open');
    };
  }, []);

  return null;
}

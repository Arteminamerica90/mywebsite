import { useEffect } from 'react';

let sharedObserver = null;

function ensureObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        sharedObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  return sharedObserver;
}

export const useReveal = () => {
  useEffect(() => {
    const obs = ensureObserver();
    const reveals = document.querySelectorAll('.reveal:not(.active)');
    reveals.forEach((el) => obs.observe(el));

    return () => {
      reveals.forEach((el) => obs.unobserve(el));
    };
  }, []);
};


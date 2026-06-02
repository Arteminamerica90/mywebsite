import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
};


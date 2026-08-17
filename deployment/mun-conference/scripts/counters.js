/* ==========================================================================
   TACTICAL ANIMATED COUNTERS
   ========================================================================== */

(function () {
  function animateValue(element, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const isCurrency = prefix.includes('₹') || element.dataset.currency === 'true';

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(ease * (end - start) + start);

      let formattedNumber = currentVal.toLocaleString('en-IN');
      element.textContent = `${prefix}${formattedNumber}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${prefix}${end.toLocaleString('en-IN')}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  const observerOptions = {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = parseInt(el.getAttribute('data-duration'), 10) || 1600;

        if (!isNaN(targetValue) && !el.classList.contains('counted')) {
          el.classList.add('counted');
          animateValue(el, 0, targetValue, duration, prefix, suffix);
        }
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    const counterElements = document.querySelectorAll('.animate-counter');
    counterElements.forEach(el => counterObserver.observe(el));
  });
})();

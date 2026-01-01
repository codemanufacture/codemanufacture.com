// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      openIcon.classList.toggle('block');
      closeIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('block');
    });
  }

  // Close mobile menu when clicking on a link
  const menuLinks = mobileMenu?.querySelectorAll('a');
  menuLinks?.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
      openIcon.classList.remove('hidden');
      openIcon.classList.add('block');
      closeIcon.classList.add('hidden');
      closeIcon.classList.remove('block');
    });
  });
});

// Go to top button
document.addEventListener('DOMContentLoaded', function() {
  const goToTopButton = document.createElement('button');
  goToTopButton.id = 'go-to-top';
  goToTopButton.className = 'fixed bottom-8 right-8 z-50 hidden p-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-opacity';
  goToTopButton.setAttribute('aria-label', 'Go to top');
  goToTopButton.innerHTML = '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>';
  document.body.appendChild(goToTopButton);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      goToTopButton.classList.remove('hidden');
    } else {
      goToTopButton.classList.add('hidden');
    }
  });

  goToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('mobile-menu-button');
  const menuCloseButton = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  function openMenu() {
    menuButton.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.remove('hidden');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeMenu);
  }

  // Close mobile menu when clicking on a link
  const menuLinks = mobileMenu?.querySelectorAll('a');
  menuLinks?.forEach(function(link) {
    link.addEventListener('click', closeMenu);
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

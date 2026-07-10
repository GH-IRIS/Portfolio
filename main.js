document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------
     Sticky Header on Scroll
  ------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* -------------------------------------------------------------
     Mobile Menu Toggle
  ------------------------------------------------------------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }



  /* -------------------------------------------------------------
     Scroll Active Page Link Highlight
  ------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  
  if (sections.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; // offset for sticky header height
        const sectionId = current.getAttribute('id');
        
        // Find navbar link matching section ID
        const targetLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);
        
        if (targetLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            targetLink.classList.add('active');
          }
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.navbar-nav .nav-link');
  
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener('click', function() {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    }
  
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
  
    document.addEventListener('click', function(event) {
      var isClickInsideNavbar = navbarCollapse.contains(event.target);
      var isClickOnNavbarToggler = navbarToggler.contains(event.target);
      if (!isClickInsideNavbar && !isClickOnNavbarToggler) {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
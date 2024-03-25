document.addEventListener("DOMContentLoaded", function() {

  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function(link) {

      link.addEventListener("click", function(event) {

          event.preventDefault();
          
          var targetSection = document.querySelector(link.getAttribute("href"));
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});
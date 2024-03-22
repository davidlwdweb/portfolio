document.addEventListener("DOMContentLoaded", function() {

    var contactButton = document.querySelector(".button");

    contactButton.addEventListener("click", function(event) {

      event.preventDefault();

      var targetSection = document.querySelector(event.target.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: 'smooth' });

    });
    
  });
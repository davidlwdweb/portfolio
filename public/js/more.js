document.addEventListener("DOMContentLoaded", function() {
  var learnMores = document.querySelectorAll(".learnMore");
  var popup = document.getElementById("popup");
  var closePopup = document.getElementById("closePopup");

  learnMores.forEach(function(button) {
    button.addEventListener("click", function() {
      popup.style.display = "block";
    });
  });

  closePopup.addEventListener("click", function() {
    popup.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 70) { 
          $('.navbar').css("background-color", "#faf5ff");
      } else {
          $('.navbar').css("background-color", "transparent");
      }
    });
});
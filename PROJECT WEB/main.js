 // JavaScript for scroll effect
 window.onscroll = function() { scrollFunction() };

 function scrollFunction() {
   var header = document.getElementById("header");

   // Add your scroll effect logic here
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     header.classList.add("fixed-header");
   } else {
     header.classList.remove("fixed-header");
   }
 }
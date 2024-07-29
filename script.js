
   // script.js

   let lastScrollTop = 0;
   const navbar = document.getElementById('Navigation');
   
   window.addEventListener('scroll', function() {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     
     if (scrollTop > 100) {
       navbar.classList.add('scrolled');
     } else {
       navbar.classList.remove('scrolled');
     }
     
     if (scrollTop > lastScrollTop) {
      
       navbar.classList.add('hidden');
     } else {
      
       navbar.classList.remove('hidden');
     }
     
     lastScrollTop = scrollTop;
   });
   
   
   
   // form validation script hai
   
   function validateForm() {
       let form = document.forms["contactForm"];
       let name = form["name"].value;
       let email = form["email"].value;
       let message = form["message"].value;
   
       if (name === "" || email === "" || message === "") {
           alert("All fields are must to field");
           return false;
       }
   
       
       let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
           alert("Please enter a valid email address");
           return false;
       }
   
       return true;
   }

//    smooth scrolling 

const scroll = new LocomotiveScroll({
    el: document.querySelector('.scroll-container'),
    smooth: true
});
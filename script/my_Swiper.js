 // pagination="true" pagination-clickable="true" slides-per-view="3" pagination-dynamic-bullets="true" autoplay-delay="2500" autoplay-disable-on-interaction="false" speed="1000" loop="true"

 const swiper1 = new Swiper('.clint_img_swiper', {
     speed: 1000,
     loop: true,
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
         type: 'bullets',
         dynamicBullets: true,
     },
     autoplay: {
         delay: 1700,
         disableOnInteraction: false,
     },
     // Responsive breakpoints
     breakpoints: {
         // when window width is >= 320px
         100: {
             slidesPerView: 1,
             spaceBetween: 0,
             loop: true
         },
         // when window width is >= 600px
         600: {
             slidesPerView: 2,
             spaceBetween: 0,
             loop: true
         },

         // when window width is >= 640px
         815: {
             slidesPerView: 3,
             spaceBetween: 0,
             loop: true
         }
     }

 });


 var swiper = new Swiper(".testimonial-swiper", {
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
     speed: 1000,
     loop: true,
     autoplay: {
         delay: 1700,
         disableOnInteraction: false,
     },
 });
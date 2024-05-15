let bgBtn = document.querySelector('#bg_btn');
let searchBox = document.querySelector('.search-box');
let loginForm = document.querySelector('.login-form');
let infoBox = document.querySelector('.info-box');
let navBar = document.querySelector('.navbar');


window.onscroll = () => {
   searchBox.classList.remove('active');
   loginForm.classList.remove('active');
   infoBox.classList.remove('active');
   navBar.classList.remove('active');

}




document.querySelector('#search_btn').onclick = () => {
   searchBox.classList.toggle('active');
   loginForm.classList.remove('active');
   infoBox.classList.remove('active');
   navBar.classList.remove('active');
}

document.querySelector('#user_btn').onclick = () => {
   loginForm.classList.toggle('active');
   searchBox.classList.remove('active')
   infoBox.classList.remove('active')
   navBar.classList.remove('active')
}

document.querySelector('#info_btn').onclick = () => {
   infoBox.classList.add('active');
   loginForm.classList.remove('active');
   searchBox.classList.remove('active');
   navBar.classList.remove('active');

}
document.querySelector('#close_btn').onclick = () => {
   infoBox.classList.remove('active');
}

document.querySelector('#bars_btn').onclick = () =>{
   navBar.classList.toggle('active');
   searchBox.classList.remove('active');
   loginForm.classList.remove('active');
   infoBox.classList.remove('active');
}

bgBtn.onclick = () => {
   bgBtn.classList.toggle('fa-sun');
   if (bgBtn.classList.contains('fa-sun')) {
      document.body.classList.add('active')
   }
   else {
      document.body.classList.remove('active');
   }
}



// -----------swiper-js ----------

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   speed: 400,
   autoplay: {
      delay: 2000,
      desibleInteraction: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".review-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});
var swiper = new Swiper(".blog-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   autoplay: {
      delay: 2000,
      desibleInteraction: true,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});
var swiper = new Swiper(".image-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 10,
   centeredSlides: true,

   autoplay: {
      delay: 1200,
      desibleInteraction: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      991: {
         slidesPerView: 6,
      },
   },
});

var HeaderSwiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

    });

var CategorysSwiper2 = new Swiper(".multiple-slide-carousel", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: " .swiper-button-next",
          prevEl: " .swiper-button-prev",
        },
        breakpoints: {
         1920: {
             slidesPerView: 6,
             spaceBetween: 10
         },
         1028: {
             slidesPerView: 6,
             spaceBetween: 10
         },
         550: {
             slidesPerView: 3,
             spaceBetween: 0
         },

       }
      });

  ProductDetailsSwiper= new Swiper(".multiple-slide-carousel-ProductDetails", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: " .swiper-button-next-ProductDetails",
      prevEl: " .swiper-button-prev-ProductDetails",
    },
    breakpoints: {
     1920: {
         slidesPerView: 6,
         spaceBetween: 10
     },
     1028: {
         slidesPerView: 6,
         spaceBetween: 10
     },
     550: {
         slidesPerView: 3,
         spaceBetween: 0
     },

   }
  })

//             
document.getElementById('countries-button').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-countries');
    dropdown.classList.toggle('hidden');
  });
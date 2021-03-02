// let currentScroll = 0;

// const movieList = document.querySelectorAll(".movie_list");
// const movieListFeatured = document.querySelector(".movie_list_featured");
// const buttonLeft = document.querySelectorAll(".movie_list_buttons .left");
// const buttonRight = document.querySelectorAll(".movie_list_buttons .right");

// const isOverflown = (element) => {
//   return element.scrollWidth > element.clientWidth;
// };

// if (!isOverflown(movieList[0])) {
//   movieList[0].parentElement.children[0].style.display = "none";
//   movieList[0].parentElement.children[1].style.display = "none";
// }

// if (movieList[1]) {
//   if (!isOverflown(movieList[1])) {
//     movieList[1].parentElement.children[0].style.display = "none";
//     movieList[1].parentElement.children[1].style.display = "none";
//   }
// }

// const scroll = (e) => {
//   const target = e.target.nextElementSibling;

//   if (currentScroll <= movieListFeatured.clientWidth) {
//     if (e.target.classList.contains("right")) {
//       e.target.previousElementSibling.style.display = "inline-block";
//       currentScroll += window.innerWidth / 2;

//       if (currentScroll >= movieListFeatured.clientWidth) {
//         e.target.style.display = "none";
//         currentScroll = movieListFeatured.clientWidth - window.innerWidth / 2;
//       }
//       target.scrollTo(currentScroll, 0);
//     } else {
//       currentScroll -= window.innerWidth / 2;

//       if (currentScroll < 0) {
//         currentScroll = 0;
//         e.target.style.display = "none";
//         e.target.nextElementSibling.style.display = "inline-block";
//       }

//       target.nextElementSibling.scrollTo(currentScroll, 0);
//     }
//   }
// };

// buttonLeft.forEach((button) => {
//   button.addEventListener("click", scroll);
//   button.style.display = "none";
// });

// buttonRight.forEach((button) => {
//   button.addEventListener("click", scroll);
// });


   let swiper = new Swiper(".swiper-container", {
     slidesPerView: 5,
     spaceBetween: 30,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     slidesPerGroup: 5,
     loop: false,
     loopFillGroupWithBlank: true,
   });


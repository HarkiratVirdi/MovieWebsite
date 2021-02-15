// const movieListCarousel = document.querySelectorAll(".movie_list_featured");

// const transformIt = (e) => {
//   console.log(isOverflown(e.target));
//   if (isOverflown(e.target)) {
//     e.target.style.transform = "translateX(-60%)";
//   }
// };

// movieListCarousel.forEach((movieList) => {
//   movieList.addEventListener("click", transformIt);
// });

// function isOverflown(element) {
//   return element.scrollWidth > element.clientWidth;
// }

let currentScroll = 0;

const movieList = document.querySelectorAll(".movie_list");
const movieListFeatured = document.querySelector(".movie_list_featured");
const buttonLeft = document.querySelector(".movie_list_buttons .left");
const buttonRight = document.querySelector(".movie_list_buttons .right");
console.log(movieList);

const scroll = (e) => {
  console.log("scroll works", e.target);

  currentScroll += window.innerWidth / 2;
  console.log("curent scroll", currentScroll);
  if (currentScroll < movieListFeatured.clientWidth) {
    buttonLeft.style.left = currentScroll / 2 + "px";
    target.scrollTo(currentScroll, 0);
  }
  //   buttonRight.style.right = currentScroll + "px";
};

// movieList.forEach((list) => {
//   list.addEventListener("click", scroll);
//   list.firstElementChild.addEventListener("click", scroll);
// });

buttonLeft.addEventListener("click", scroll);
buttonRight.addEventListener("click", scroll);

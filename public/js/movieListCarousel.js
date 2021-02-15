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

console.log(movieList);

const scroll = (e) => {
  console.log("scroll works", e.target);
  const target = e.target;
  currentScroll += window.innerWidth;
  console.log("curent scroll", currentScroll);
  target.scrollTo(currentScroll, 0);
};

movieList.forEach((list) => {
  list.addEventListener("click", scroll);
  list.firstElementChild.addEventListener("click", scroll);
});

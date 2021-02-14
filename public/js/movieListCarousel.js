const movieListCarousel = document.querySelectorAll(".movie_list_featured");

const transformIt = (e) => {
  console.log(e.target);
};

movieListCarousel.forEach((movieList) => {
  movieList.addEventListener("click", transformIt);
});

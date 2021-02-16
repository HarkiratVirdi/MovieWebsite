let currentScroll = 0;

const movieList = document.querySelectorAll(".movie_list");
const movieListFeatured = document.querySelector(".movie_list_featured");
const buttonLeft = document.querySelector(".movie_list_buttons .left");
const buttonRight = document.querySelector(".movie_list_buttons .right");

buttonLeft.style.display = "none";

const isOverflown = (element) => {
  return element.scrollWidth > element.clientWidth;
};

if (!isOverflown(movieList[0])) {
  movieList[0].parentElement.children[0].style.display = "none";
  movieList[0].parentElement.children[1].style.display = "none";
}

if (!isOverflown(movieList[1])) {
  movieList[1].parentElement.children[0].style.display = "none";
  movieList[1].parentElement.children[1].style.display = "none";
}

const scroll = (e) => {
  const target = e.target.nextElementSibling;

  if (currentScroll <= movieListFeatured.clientWidth) {
    if (e.target.classList.contains("right")) {
      buttonLeft.style.display = "inline-block";
      currentScroll += window.innerWidth / 2;

      if (currentScroll >= movieListFeatured.clientWidth) {
        currentScroll = movieListFeatured.clientWidth - window.innerWidth / 2;
      }
      target.scrollTo(currentScroll, 0);
    } else {
      currentScroll -= window.innerWidth / 2;

      if (currentScroll < 0) {
        currentScroll = 0;
        buttonLeft.style.display = "none";
      }

      target.nextElementSibling.scrollTo(currentScroll, 0);
    }
  }
};

buttonLeft.addEventListener("click", scroll);
buttonRight.addEventListener("click", scroll);

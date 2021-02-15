function isOverflown(element) {
  return element.scrollWidth > element.clientWidth;
}

let currentScroll = 0;

const movieList = document.querySelectorAll(".movie_list");
const movieListFeatured = document.querySelector(".movie_list_featured");
const buttonLeft = document.querySelector(".movie_list_buttons .left");
const buttonRight = document.querySelector(".movie_list_buttons .right");

if (!isOverflown(movieList[0])) {
  movieList[0].parentElement.children[0].style.display = "none";
  movieList[0].parentElement.children[1].style.display = "none";
  //   buttonLeft.style.display = "none";
  //   buttonRight.style.display = "none";
}

if (!isOverflown(movieList[1])) {
  movieList[1].parentElement.children[0].style.display = "none";
  movieList[1].parentElement.children[1].style.display = "none";
  //   buttonRight.style.display = "none";
}

const scroll = (e) => {
  console.log("scroll works", e.target);
  const target = e.target.nextElementSibling;
  console.log("curent scroll", currentScroll);
  if (currentScroll <= movieListFeatured.clientWidth) {
    if (e.target.classList.contains("right")) {
      currentScroll += window.innerWidth / 2;

      if (currentScroll >= movieListFeatured.clientWidth) {
        currentScroll = movieListFeatured.clientWidth - window.innerWidth / 2;
      }
      console.log("contains right", currentScroll);
      target.scrollTo(currentScroll, 0);
    } else {
      currentScroll -= window.innerWidth / 2;

      if (currentScroll < 0) {
        currentScroll = 0;
      }

      console.log("contains left", currentScroll);
      target.nextElementSibling.scrollTo(currentScroll, 0);
    }
  }
};

buttonLeft.addEventListener("click", scroll);
buttonRight.addEventListener("click", scroll);

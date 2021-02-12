let purchaseMovie = document.querySelector(".purchasemovie");
let tl = gsap.timeline();
tl.staggerTo(".movie_char", 0.25, { opacity: 1 }, 0.03);

const movieDetailsHeight = document.querySelector(".movie_info").clientHeight;

gsap.to(".movie_hero_image", {
  scrollTrigger: {
    trigger: ".movie_hero_image",
    scrub: true,
    start: "top center",
    toggleActions: "restart pause reverse pause",
  },
  transform: "matrix(1.1,0,0,1.1,0,0)",
});

const addShrinkClass = () => {
  let scrollingTop = document.documentElement.scrollTop;

  let height = window.innerHeight;

  if (scrollingTop > height - 35) {
    purchaseMovie.classList.add("shrink");
  } else {
    purchaseMovie.classList.remove("shrink");
  }

  if (scrollingTop > movieDetailsHeight + height - purchaseMovie.clientHeight) {
    purchaseMovie.style.position = "static";
  } else {
    purchaseMovie.style.position = "sticky";
  }
};

window.addEventListener("scroll", addShrinkClass);

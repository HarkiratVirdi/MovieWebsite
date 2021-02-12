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

  if (scrollingTop > height - 25) {
    purchaseMovie.classList.add("shrink");
  } else {
    purchaseMovie.classList.remove("shrink");
  }

  // if (scrollingTop > 50) {
  //   document.body.style.background = "#222";
  // } else {
  //   document.body.style.background = "#111";
  // }
};

window.addEventListener("scroll", addShrinkClass);

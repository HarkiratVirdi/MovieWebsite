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

const bodyScroll = () => {
  let scrollingTop = document.documentElement.scrollTop;
  console.log(scrollingTop);
  let height = window.innerHeight;
  console.log("height", height);
  if (document.documentElement.scrollTop > window.innerHeight - 25) {
    purchaseMovie.classList.add("shrink");
  } else {
    purchaseMovie.classList.remove("shrink");
  }
};

window.addEventListener("scroll", bodyScroll);

let moviePurchase = document.querySelector(".purchasemovie");
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

const bodyScrollTop = () => {
  if (document.documentElement.scrollTop > 800) {
    moviePurchase.classList.add("shrink");
  } else {
    moviePurchase.classList.remove("shrink");
  }

  return document.documentElement.scrollTop;
};

window.addEventListener("scroll", bodyScrollTop);

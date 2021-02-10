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

// if (window.innerWidth > 870) {
//   let controller = new ScrollMagic.Controller();

//   const scene = new ScrollMagic.Scene({
//     triggerElement: ".purchasemovie",
//     triggerHook: "onLeave",
//     duration: movieDetailsWidth - 446,
//     offset: -150,
//   })
//     .setPin(".purchasemovie")
//     .addIndicators()
//     .addTo(controller);
// }

// const purchaseMovie = document.querySelector(".purchasemovie");
// console.log(purchaseMovie);
// purchaseMovie.style.height = movieDetailsHeight + "px";

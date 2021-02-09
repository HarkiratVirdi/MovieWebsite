let tl = gsap.timeline();
tl.staggerTo(".movie_char", 0.25, { opacity: 1 }, 0.03);

const movieDetailsWidth = document.querySelector(".movie_details").clientHeight;
console.log(movieDetailsWidth);
gsap.to(".movie_hero_image", {
  scrollTrigger: {
    trigger: ".movie_hero_image",
    scrub: true,
    start: "top center",
    toggleActions: "restart pause reverse pause",
  },
  transform: "matrix(1.1,0,0,1.1,0,0)",
});

// gsap.to(".purchasemovie", {
//   scrollTrigger: {
//     trigger: ".purchasemovie",
//     pin: true,
//     start: "top top",
//     toggleActions: "restart pause reverse pause",
//     markers: true,
//     end:
//   },
// });

if (window.innerWidth > 870) {
  let controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    triggerElement: ".purchasemovie",
    triggerHook: "onLeave",
    duration: movieDetailsWidth - 446,
    offset: -150,
  })
    .setPin(".purchasemovie")
    .addIndicators()
    .addTo(controller);
}

// gsap.to(".purchasemovie", {
//   scrollTrigger: {
//     trigger: ".purchasemovie",
//     pin: true,
//     markers: true,
//     end: movieDetailsWidth,
//   },
// });

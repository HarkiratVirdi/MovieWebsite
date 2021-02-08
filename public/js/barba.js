const loader = document.querySelector(".loader");
barba.init({
  transitions: [
    {
      async leave() {
        await loaderIn();
      },
      enter() {
        loaderAway();
      },
    },
  ],
});

// let tl = gsap.timeline();
// tl.staggerTo(".movie_char", 0.25, { opacity: 1 }, 0.03);

// const movieDetailsWidth = document.querySelector(".movie_details").clientHeight;
// console.log(movieDetailsWidth);
// gsap.to(".movie_hero_image", {
//   scrollTrigger: {
//     trigger: ".movie_hero_image",
//     scrub: true,
//     start: "top center",
//     toggleActions: "restart pause reverse pause",
//   },
//   transform: "matrix(1.1,0,0,1.1,0,0)",
// });

// // gsap.to(".purchasemovie", {
// //   scrollTrigger: {
// //     trigger: ".purchasemovie",
// //     pin: true,
// //     start: "top top",
// //     toggleActions: "restart pause reverse pause",
// //     markers: true,
// //     end:
// //   },
// // });

// let controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".purchasemovie",
//   triggerHook: "onLeave",
//   duration: movieDetailsWidth,
//   offset: -150,
// })
//   .setPin(".purchasemovie")
//   .addTo(controller);

function loaderIn() {
  return gsap.fromTo(
    loader,
    {
      rotation: 10,
      scaleX: 0,
      xPercent: -5,
    },
    {
      duration: 0.8,
      xPercent: 0,
      scaleX: 1,
      rotation: 0,
      ease: "power4.inOut",
      transformOrigin: "left center",
    }
  );
}
function loaderAway() {
  // GSAP tween to hide loading screen
  return gsap.to(loader, {
    duration: 0.8,
    scaleX: 0,
    xPercent: 5,
    rotation: -10,
    transformOrigin: "right center",
    ease: "power4.inOut",
  });
}
barba.hooks.before(() => {
  document.querySelector("html").classList.add("is-transitioning");
});
// do something after the transition finishes
barba.hooks.after(() => {
  document.querySelector("html").classList.remove("is-transitioning");
});
gsap.set(loader, {
  scaleX: 0,
  rotation: 10,
  xPercent: -5,
  yPercent: -50,
  transformOrigin: "left center",
  autoAlpha: 1,
});
barba.hooks.enter(() => {
  window.scrollTo(0, 0);
  let tl = gsap.timeline({});
  tl.staggerTo(".movie_char", 0.25, { opacity: 1, delay: 0.6 }, 0.03);

  const movieDetailsWidth = document.querySelector(".movie_details")
    .clientHeight;
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

  let controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    triggerElement: ".purchasemovie",
    triggerHook: "onLeave",
    duration: movieDetailsWidth,
    offset: -150,
  })
    .setPin(".purchasemovie")
    .addTo(controller);
});

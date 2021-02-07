// gsap.to(".movie_char", {
//   y: "50",
//   stagger: {
//     each: 0.1,
//     amount: 0.1,
//   },
// });

console.log("effects js loaded");

var tl = new TimelineMax();
tl.staggerTo(".movie_char", 0.25, { opacity: 1 }, 0.05);
// tl.staggerTo(".movie_char", 0.5, { opacity: 0, y: 20 }, 0.25, "+=0.5");

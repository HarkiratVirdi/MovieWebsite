let purchaseMovie = document.querySelector(".purchasemovie");
const movieWord = document.querySelectorAll(".movie_word");

let movieJoin = [];
let movieWords = movieWord.forEach((element, index) => {
  Array.prototype.forEach.call(element.children, function(el) {
    movieJoin.push(el.innerHTML);
  });
  if(index !== movieWord.length - 1)
  {
    movieJoin.push(" ");
  }
});

console.log("moviename", movieJoin);

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
  transform: "matrix(1.15,0,0,1.15,0,0)",
});

gsap.to(".overlay_text", {
  scrollTrigger: {
    trigger: ".cast",
    scrub: true,
    start: "top center",
    toggleActions: "restart pause reverse pause",
  },
  x: "100px",
});

gsap.to(".cast_image", {
  scrollTrigger: {
    trigger: ".cast_image",
    start: "top bottom",
  },
  width: "45%",
  duration: 1,
  ease: "expo",
});

window.onresize = () => {
  purchaseMovie = document.querySelector(".purchasemovie");
};

const addShrinkClass = () => {
  let scrollingTop = document.documentElement.scrollTop;

  let height = window.innerHeight;


  if(window.innerWidth > 500)
  {
  if (scrollingTop > height - 35) {
    purchaseMovie.classList.add("shrink");
  } else {
    purchaseMovie.classList.remove("shrink");
  }

  if (
    scrollingTop >
    movieDetailsHeight + height - purchaseMovie.clientHeight / 1.3
  ) {
    purchaseMovie.style.position = "static";
  } else {
    purchaseMovie.style.position = "sticky";
  }
  }else{
    console.log("height", height);
     if (scrollingTop > height / 1.65) {
       purchaseMovie.classList.add("shrink");
     } else {
       purchaseMovie.classList.remove("shrink");
     }

     if (
       scrollingTop >
       movieDetailsHeight + height - purchaseMovie.clientHeight / 0.6
     ) {
       purchaseMovie.style.position = "static";
     } else {
       purchaseMovie.style.position = "sticky";
     }
}
};

window.addEventListener("scroll", addShrinkClass);


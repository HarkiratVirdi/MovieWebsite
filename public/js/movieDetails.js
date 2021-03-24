let purchaseMovie = document.querySelector(".purchasemovie");
const movieWord = document.querySelectorAll(".movie_word");
const swiperWrapper = document.querySelector(".swiper-wrapper");
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

let tl = gsap.timeline();
tl.staggerTo(".movie_char", 0.25 , { opacity: 1, delay: ".3" }, 0.045);

const movieDetailsHeight = document.querySelector(".movie_info").clientHeight;

const gsapAnimations = () => {
gsap.to(".movie_hero_image", {
  scrollTrigger: {
    trigger: ".movie_hero_image",
    scrub: true,
    start: "top top",
    toggleActions: "restart pause reverse pause",
  },
  ease: "Sine.easeIn",
  transform: "matrix(1.5,0,0,1.5,0,0)",
  opacity: 0,
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
  width: "28%",
  duration: 0.8,
  ease: "circ",
});

}

gsapAnimations();

window.onresize = () => {
  purchaseMovie = document.querySelector(".purchasemovie");
  gsapAnimations();
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


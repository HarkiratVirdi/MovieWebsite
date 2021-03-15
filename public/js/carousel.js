// const paginationButtons = document.querySelectorAll(".hero_pagination_button");
// const hero_title = document.getElementById('hero_title');
// const hero_desc = document.getElementById("hero_desc");
// const hero_buy = document.getElementById("hero_buy");
// const hero_cast = document.querySelectorAll("#hero_cast_li");
// const slides = document.querySelectorAll(".hero_carousel_slides");
// const carousel = document.querySelector(".hero_carousel");
// let prevSlide = 1;
// const hero_arrow_left = document.querySelector(".hero_arrows_left");
// const hero_arrow_right = document.querySelector(".hero_arrows_right");


const heroInfo = [
  {
    title: "The Witcher",
    desc:
      "The Witcher is an American fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski.",
    buy: "30",
    cast: [
      {
        name: "Henry Cavill",
      },
      {
        name: "Freya Allan",
      },
      {
        name: "Yasen Atour",
      },
    ],
  },
  {
    title: "Game of Thrones",
    desc:
      "The long winter is here. Throughout seven thrilling episodes, the penultimate Season 8 of this blockbuster hit series focuses on a convergence of armies and attitudes that have been brewing for years.",
    buy: "80",
    cast: [
      {
        name: "Emilia Clarke",
      },
      {
        name: "Peter Dinkins",
      },
      {
        name: "Lena Headey",
      },
    ],
  },
  {
    title: "The Queen's Gambit",
    desc:
      "Anya Taylor-Joy and the cast of 'The Queen's Gambit' compare the passion they find in their careers with the drive that the show's lead character Beth has for chess.",
    buy: "20",
    cast: [
      {
        name: "Anya Taylor-Joy",
      },
      {
        name: "Chloe Pirrie",
      },
      {
        name: "Bill Camp",
      },
    ],
  },
  {
    title: "Wonder Woman",
    desc:
      "Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powers...and her true destiny.",
    buy: "25",
    cast: [
      {
        name: "Gal Gadot",
      },
      {
        name: "Chris Pine",
      },
      {
        name: "Patty Jenkins",
      },
    ],
  },
  {
    title: "Arrival",
    desc:
      "Arrival is a 2016 American science fiction film directed by Denis Villeneuve and written by Eric Heisserer.It stars Amy Adams, Jeremy Renner, and Forest Whitaker.",
    buy: "15",
    cast: [
      {
        name: "Amy Adams",
      },
      {
        name: "Jeremy Runner",
      },
      {
        name: "Forest Whitaker",
      },
    ],
  },
];

// paginationButtons[0].style.background = "orange";
// slides[0].style.zIndex = '5';


// let index = 1;
// setInterval(() => {
//   //  transformTo(index);
//   prevSlide = index;
//   changeZIndex(index);
//   changeInfo(index);

//   index++;
//   if (index === 5) {
//     index = 0;
//   }
// }, 3000);

// const findIndex = (e) => {
//   return e.getAttribute("index");
// };

// const transformTo = (index) => {
//   const transformValue = -20 * parseInt(index);
//   carousel.style.transform = `translateX(${transformValue}%)`;
//   setPaginationColor(index);
// };

// const changeZIndex = (index) => {
//   // if(slides[index - 1])
//   // {
//   //   setTimeout(() => {
//   //     slides[index - 1].classList.remove("animateSlide-active");
//   //     slides[index - 1].classList.add("animateSlide-notActive");
//   //   }, 500);
//   // }else if(index === 0){
//   //   slides[slides.length - 1].classList.remove("animateSlide-active");
//   //   slides[slides.length - 1].classList.add('animateSlide-notActive');
//   // }

//   // slides.forEach((slide) => {
//   //     slide.classList.remove("animateSlide-active");
//   //     slide.classList.add("animateSlide-notActive");
//   // })


//   console.log("index", index);
//   if(index == 0)
//   {
//     slides.forEach((slide) => {
//       slide.className = "hero_carousel_slides"; 
//     })
//   }else{
//     slides[index - 1].classList.remove("animateSlide-active");
//     slides[index - 1].classList.add("animateSlide-notActive");
//   }

//   slides[index].classList.add("animateSlide-active");
//   slides[index].classList.remove("animateSlide-notActive");
//   setPaginationColor(index);
// }

// const changeZIndexManually = () => {

// }



// const moveTo = (e) => {
//   e.preventDefault();
//   const target = e.target;
//     prevSlide = index;
//   index = findIndex(target);
//   removeColorManully(index);
//   // changeZIndex(index);
//   changeZIndexManually(index);
//   changeInfo(index);
// };

// paginationButtons.forEach((paginationButton) => {
//   paginationButton.addEventListener("click", moveTo);
// });


// const setPaginationColor = (idx) => {
//   // paginationButtons[idx - 1].style.background = "orange";
//   paginationButtons[idx].style.background = "orange";

//   removeColor(idx);
// };

// const removeColor = (idx) => {
//   if (idx > 0) {
//     paginationButtons[idx - 1].style.background = "#333";
//   } else if (idx === 0) {
//     paginationButtons[4].style.background = "#333";
//   }
// };

// const removeColorManully = (idx) => {
//   paginationButtons.forEach((paginationButton) => {
//     paginationButton.style.background = "#333";
//   });

//   paginationButtons[idx].style.background = "orange";
// };


// const changeInfo = (idx) => {
//   console.log(idx);

//   const singleMovie = heroInfo[idx];

//   hero_title.innerHTML = singleMovie.title;
//   hero_buy.innerHTML = "Buy Now $" + singleMovie.buy;
//   hero_desc.innerHTML = singleMovie.desc;


//   hero_cast.forEach((ca, index) => {
//     ca.innerHTML = singleMovie.cast[index].name;
//   })

// }


// const transformLeft = () => {
//   const activeSlide = document.querySelector(".animateSlide-active");
//     if (slide.classList.contains("hidden")) {
//       slide.classList.remove("hidden");
//     }
  
//   gsap.fromTo(
//      activeSlide,
//      { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 0 },
//      {
//        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
//        duration: 1,
//        ease: "Expo.easeInOut",
//      }
//    );
// }

// const transformRight = () => {
//   const activeSlide = document.querySelector(".animateSlide-active");

// }


// hero_arrow_left.addEventListener("click", transformLeft);
// hero_arrow_right.addEventListener("click", transformRight);


const numberOfSlides = document.querySelector(".hero_carousel").children
  .length;
console.log(numberOfSlides);
const arrowLeft = document.querySelector(".hero_arrows_left");
const arrowRight = document.querySelector(".hero_arrows_right");
let index = 1;
let isTransforming = false;
let incrementZIndex = 10;
const slides = document.querySelectorAll(".hero_carousel_slides");
slides[0].classList.add("slide__active");


const transformNextSlide = (slide) => {
  if (slide.classList.contains("hidden")) {
    slide.classList.remove("hidden");
  }
  console.log("transforming")
  slide.classList.add("show");
 gsap.fromTo(
   slide,
   {
     clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
     //  x: 100,
     duration: 0,
   },
   {
     clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
     duration: 1,
     //  x: 0,
     ease: "Expo.easeInOut",
   }
 );
};

const transformPrevSlide = (slide) => {
  if (slide.classList.contains("hidden")) {
    slide.classList.remove("hidden");
  }
  slide.classList.add("show");
   gsap.fromTo(
     slide,
     { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 0 },
     {
       clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
       duration: 1,
       ease: "Expo.easeInOut",
     }
   );
};

const removeEffectsAndClass = (slide, nextSlide) => {
  slide.classList.add("hidden");
  nextSlide.classList.add("slide__active");
  slide.classList.remove("slide__active");
  slide.classList.remove("show");
  isTransforming = false;
  arrowRight.style.userSelect = "all";
  arrowLeft.style.userSelect = "all";
};

const transformToLeft = () => {
  const activeSlide = document.querySelector(".slide__active");
  let prevSlide = activeSlide.previousElementSibling;
  console.log("prev slide", prevSlide);
  if (!prevSlide) {
    prevSlide = slides[4];
  }
    prevSlide.style.zIndex = incrementZIndex++;


  if (prevSlide && !isTransforming) {
    transformPrevSlide(prevSlide);
    isTransforming = true;
    arrowLeft.style.userSelect = "none";
    setTimeout(() => {
      removeEffectsAndClass(activeSlide, prevSlide);
    }, 1000);
  }
};

const transformToRight = () => {
  const activeSlide = document.querySelector(".slide__active");
  let nextSlide = activeSlide.nextElementSibling;
  console.log("next slide", nextSlide);
  if (!nextSlide) {
    nextSlide = document.querySelectorAll(".hero_carousel_slides")[0];
  }

  nextSlide.style.zIndex = incrementZIndex++;

    transformNextSlide(nextSlide);
    isTransforming = true;
    arrowRight.style.userSelect = "none";
    setTimeout(() => {
      removeEffectsAndClass(activeSlide, nextSlide);
    }, 1000);
 
};

arrowLeft.addEventListener("click", transformToLeft);
arrowRight.addEventListener("click", transformToRight);

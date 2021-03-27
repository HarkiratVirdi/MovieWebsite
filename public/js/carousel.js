const paginationButtons = document.querySelectorAll(".hero_pagination_button");
const hero_title = document.getElementById('hero_title');
const hero_desc = document.getElementById("hero_desc");
const hero_buy = document.getElementById("hero_buy");
const hero_cast = document.querySelectorAll("#hero_cast_li");

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

paginationButtons[0].style.background = "orange";

let automaticalTransform = true;
let index = 1;
let isTransforming = false;


setInterval(() => {
  if(!isTransforming)
  {
    isTransforming = true;
    transformToRight();
  }
}, 3000);


const setPaginationColor = (idx) => {
  // paginationButtons[idx - 1].style.background = "orange";
  removeAllColor();
  paginationButtons[idx].style.background = "orange";
  removeColor(idx);
};

const removeColor = (idx) => {
  if (idx > 0) {
    paginationButtons[idx - 1].style.background = "#333";
  } else if (idx === 0) {
    paginationButtons[4].style.background = "#333";
  }
};

const removeAllColor = () =>{
paginationButtons.forEach((paginationButton) => {
  paginationButton.style.background = "#333";
});
}

const removeColorManully = (idx) => {
  removeAllColor();
  paginationButtons[idx].style.background = "orange";
};


const changeInfo = (idx) => {
  const singleMovie = heroInfo[idx];
  setTimeout(() => {
     hero_title.innerHTML = singleMovie.title;
    //  hero_buy.innerHTML = "Buy Now $" + singleMovie.buy;
     hero_desc.innerHTML = singleMovie.desc;
     hero_cast.forEach((ca, index) => {
       ca.innerHTML = singleMovie.cast[index].name;
     });
    }, 500);
    removeColorManully(idx);
}

const numberOfSlides = document.querySelector(".hero_carousel").children
  .length;
const arrowLeft = document.querySelector(".hero_arrows_left");
const arrowRight = document.querySelector(".hero_arrows_right");
let incrementZIndex = 10;
const slides = document.querySelectorAll(".hero_carousel_slides");
slides[0].classList.add("slide__active");


const transformNextSlide = (slide) => {
  if (slide.classList.contains("hidden")) {
    slide.classList.remove("hidden");
  }
  slide.classList.add("show");
 gsap.fromTo(
   slide,
   {
     clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    
     duration: 0,
   },
   {
     clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
     duration: 0.8,
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
       duration: 0.8,
       ease: "Expo.easeInOut",
     }
   );
};

const removeEffectsAndClass = (slide, nextSlide) => {
  slide.classList.add("hidden");
  nextSlide.classList.add("slide__active");
  slide.classList.remove("slide__active");
  slide.classList.remove("show");
  arrowRight.style.userSelect = "all";
  arrowLeft.style.userSelect = "all";
};


const findIndex = (direction) => {
  let idx = 0;

  if(direction === "left")
  {
   Array.from(slides).find((el, i) => {
     if (el.classList.contains("slide__active")) {
      //  console.log("index matched left!", i);
       idx = i - 1;
     }
   });
  }else{
    Array.from(slides).find((el, i) => {
      if (el.classList.contains("slide__active")) {
        // console.log("index matched in right", i);
        idx = i + 1;
      }
    });
  }
  if(idx === -1)
  {
    idx = 4;
  }else if(idx === 5)
  {
    idx = 0;
  }

  return idx;
}

const arrowUserSelectDisable = () => {
  arrowLeft.style.userSelect = "none";
  arrowRight.style.userSelect = "none";
}

const activeAutoTransform = () => {
  setTimeout(() => {
      isTransforming = false;
  }, 2000);
}

const transformToLeft = () => {
  const activeSlide = document.querySelector(".slide__active");
  let prevSlide = activeSlide.previousElementSibling;
  if (!prevSlide) {
    prevSlide = slides[4];
  }
    prevSlide.style.zIndex = incrementZIndex++;
setPaginationColor(index);
  index = findIndex("left")
  changeInfo(index);
  if (prevSlide) {
    transformPrevSlide(prevSlide);
    arrowUserSelectDisable();
    activeAutoTransform();
    setTimeout(() => {
      removeEffectsAndClass(activeSlide, prevSlide);
    }, 1000);
  }
};

const transformToLeftManually = (e) => {
  if(!isTransforming)
  {
    e.preventDefault();
    isTransforming = true;
    transformToLeft();
  }
}

const transformToRightManually = (e) => {
  if(!isTransforming)
  {
    e.preventDefault();
    isTransforming = true;
    transformToRight();
  }
}

const transformToRight = () => {
  const activeSlide = document.querySelector(".slide__active");
  let nextSlide = activeSlide.nextElementSibling;
  if (!nextSlide) {
    nextSlide = slides[0];
  }

  nextSlide.style.zIndex = incrementZIndex++;
  index = findIndex("right");
  setPaginationColor(index);
  changeInfo(index);

    transformNextSlide(nextSlide);
    arrowUserSelectDisable();
    activeAutoTransform();
    setTimeout(() => {
      removeEffectsAndClass(activeSlide, nextSlide);
    }, 1000);
    
};

arrowLeft.addEventListener("click", transformToLeftManually);
arrowRight.addEventListener("click", transformToRightManually);


const checkTransform = (e) => {

  const activeSlide = document.querySelector(".slide__active");
  if(!isTransforming)
  {  index = e.target.getAttribute("index");
  changeInfo(index);
  setPaginationColor(index);
  slides[index].style.zIndex = incrementZIndex++;
  isTransforming = true;
  transformNextSlide(slides[index]);


      arrowUserSelectDisable();
      paginationButtons.forEach((pagination) => 
      {
        pagination.style.userSelect = "none";
      })

      activeAutoTransform();
      setTimeout(() => {
        paginationButtons.forEach((pagination) => 
        {
          pagination.style.userSelect = "all";
        })
        removeEffectsAndClass(activeSlide, slides[index]);
      }, 1000);
}
}


paginationButtons.forEach((paginationButton) => {
  paginationButton.addEventListener("click", checkTransform);
});

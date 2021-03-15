const paginationButtons = document.querySelectorAll(".hero_pagination_button");
const hero_title = document.getElementById('hero_title');
const hero_desc = document.getElementById("hero_desc");
const hero_buy = document.getElementById("hero_buy");
const hero_cast = document.querySelectorAll("#hero_cast_li");

const carousel = document.querySelector(".hero_carousel");
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
      "Arrival is a 2016 American science fiction film directed by Denis Villeneuve and written by Eric Heisserer.It stars Amy Adams, Jeremy Renner, and Forest Whitaker. The film follows a linguist enlisted by the United States Army to discover how to communicate with extraterrestrial aliens who have arrived on Earth, before tensions lead to war.",
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

let index = 0;
setInterval(() => {
   transformTo(index);
  changeInfo(index);

  index++;
  if (index === 5) {
    index = 0;
  }
}, 3000);

const findIndex = (e) => {
  return e.getAttribute("index");
};

const transformTo = (index) => {
  const transformValue = -20 * parseInt(index);
  carousel.style.transform = `translateX(${transformValue}%)`;
    setPaginationColor(index);
};

const moveTo = (e) => {
  e.preventDefault();
  const target = e.target;
  index = findIndex(target);
  removeColorManully(index);
  transformTo(index);
  changeInfo(index);
};

paginationButtons.forEach((paginationButton) => {
  paginationButton.addEventListener("click", moveTo);
});


const setPaginationColor = (idx) => {
  // paginationButtons[idx - 1].style.background = "orange";
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

const removeColorManully = (idx) => {
  paginationButtons.forEach((paginationButton) => {
    paginationButton.style.background = "#333";
  });

  paginationButtons[idx].style.background = "orange";
};


const changeInfo = (idx) => {
  console.log(idx);

  const singleMovie = heroInfo[idx];

  hero_title.innerHTML = singleMovie.title;
  hero_buy.innerHTML = "Buy Now $" + singleMovie.buy;
  hero_desc.innerHTML = singleMovie.desc;


  hero_cast.forEach((ca, index) => {
    ca.innerHTML = singleMovie.cast[index].name;
  })

}


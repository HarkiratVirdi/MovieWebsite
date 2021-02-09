const paginationButtons = document.querySelectorAll(".pagination_button");
const carousel = document.querySelectorAll(".single_carousel");

paginationButtons[0].style.background = "orange";

let index = 0;
setInterval(() => {
  transformTo(index);
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
  carousel[0].style.transform = `translateX(${transformValue}%)`;
  carousel[1].style.transform = `translateX(${transformValue}%)`;
  setPaginationColor(index);
};

const moveTo = (e) => {
  e.preventDefault();
  const target = e.target;
  index = findIndex(target);
  removeColorManully(index);
  transformTo(index);
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

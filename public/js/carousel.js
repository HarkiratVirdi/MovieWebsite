const paginationButtons = document.querySelectorAll(".hero_pagination_button");
const carousel = document.querySelector(".hero_carousel");

let index = 0;
setInterval(() => {
  const transformValue = -20 * parseInt(index);
  carousel.style.transform = `translateX(${transformValue}%)`;
  index++;
  if (index === 5) {
    index = 0;
  }
}, 4000);

const findIndex = (e) => {
  return e.getAttribute("index");
};

const transformTo = (index) => {
  const transformValue = -20 * parseInt(index);
  carousel.style.transform = `translateX(${transformValue}%)`;
};

const moveTo = (e) => {
  e.preventDefault();
  const target = e.target;
  index = findIndex(target);
  transformTo(index);
};

paginationButtons.forEach((paginationButton) => {
  paginationButton.addEventListener("click", moveTo);
});

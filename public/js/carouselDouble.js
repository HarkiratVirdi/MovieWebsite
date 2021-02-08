const paginationButtons = document.querySelectorAll(".pagination_button");
const carousel = document.querySelectorAll(".single_carousel");

let index = 0;
setInterval(() => {
  const transformValue = -20 * parseInt(index);
  carousel[0].style.transform = `translateX(${transformValue}%)`;
  carousel[1].style.transform = `translateX(${transformValue}%)`;
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
  carousel[0].style.transform = `translateX(${transformValue}%)`;
  carousel[1].style.transform = `translateX(${transformValue}%)`;
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

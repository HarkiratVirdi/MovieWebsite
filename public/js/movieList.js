const filterButtons = document.querySelectorAll(".filtermovies_filter");
const selectOptions = document.querySelector(".filtermovies_select select");

const makeURL = (value) => {
  const split = value.split(" ").join("");
  const lowerCase = split.toLowerCase();
  return lowerCase;
};

const removeActive = () => {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("active");
  });
};

const setActive = async (e) => {
  let target = e.target;

  if (target === selectOptions) {
    target = e.target.value;
  } else {
    console.log(target);
    removeActive();
    target.classList.add("active");
    target = e.target.innerHTML;
  }

  const url = makeURL(target);
  console.log(url);

  const makeRequest = await fetch(`/list/${url}`);
};

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", setActive);
});

selectOptions.addEventListener("change", setActive);

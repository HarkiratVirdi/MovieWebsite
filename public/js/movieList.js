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

const setActive = (e) => {
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
  window.location.href = `/list/?filter=${url}`;
};

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", setActive);
});

selectOptions.addEventListener("change", setActive);

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("filter");
console.log(myParam);

if (myParam) {
  removeActive();
  const element = document.getElementById(myParam);
  if (element) {
    element.classList.add("active");
    console.log("triggering");
    console.log("select options", console.dir(selectOptions[1]));
    console.log("select options", console.dir(selectOptions));
    selectOptions.selectedIndex =
      myParam === "featuredmovies"
        ? 3
        : myParam === "runtime"
        ? 2
        : myParam === "releasedate"
        ? 1
        : 0;
  }
}

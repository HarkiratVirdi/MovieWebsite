const anchorTags = document.querySelectorAll("a");
const loader = document.querySelector(".animateLoader");

const applyClassToLoader = () => {
  loader.classList.remove("animateLoader-notActive");
  loader.classList.add("animateLoader-active");
};

const pageAnimationOnClick = (e) => {
  e.preventDefault();
  const findAnchorTag = e.path.find((single) => {
    return single.href !== undefined;
  });

  let linkToNavigate = findAnchorTag.href;
  const urlNav = location.href;
console.log("link to navigate", linkToNavigate);
console.log("link actual", urlNav);
  if(linkToNavigate === urlNav + "#")
  {
      console.log("changed address");
    linkToNavigate = urlNav;
  }

  if (linkToNavigate !== urlNav) {
    applyClassToLoader();
    setTimeout(() => {
      location.href = linkToNavigate;
    }, 100);
  }
};

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", pageAnimationOnClick);
});

const initialAnimation = () => {
  setTimeout(() => {
    loader.classList.remove("animateLoader-active");
    loader.classList.add("animateLoader-notActive");
  }, 200);
};

initialAnimation();

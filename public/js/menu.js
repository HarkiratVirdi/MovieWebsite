const hamburger = document.querySelector(".fa-bars");
const overlayMenu = document.querySelector(".overlay__menu");
const cross = document.querySelector(".overlay__menu_cross");
// const links = document.querySelectorAll(".overlay__menu_link_a");
let scrollingTop = 0;
const runAnimation = () => {
  if (overlayMenu.classList.contains("openMenu")) {
    // cross.classList.remove("cross_show");
    // cross.classList.add("cross_hide");
    overlayMenu.classList.remove("openMenu");
    overlayMenu.classList.add("closeMenu");
  } else {
    // cross.classList.remove("cross_hide");
    // cross.classList.add("cross_show");
    overlayMenu.classList.add("openMenu");
    overlayMenu.classList.remove("closeMenu");
  }
};

const openMenu = (e) => {
  const target = e.target;
  runAnimation();
};

hamburger.addEventListener("click", openMenu);
cross.addEventListener("click", openMenu);

// links.forEach((link) => {
//   link.addEventListener("click", openMenu);
// });

window.onscroll = () => {
  scrollingTop = document.documentElement.scrollTop;

  if (scrollingTop > 100) {
    hamburger.classList.add("fixed_top");
  } else {
    hamburger.classList.remove("fixed_top");
  }
};

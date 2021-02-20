const hamburger = document.querySelector(".fa-bars");
const overlayMenu = document.querySelector(".overlay__menu");
const cross = document.querySelector(".overlay__menu_cross");
// const links = document.querySelectorAll(".overlay__menu_link_a");
let scrollingTop = 0;
const openMenu = () => {
  if (overlayMenu.classList.contains("openMenu")) {
    overlayMenu.classList.remove("openMenu");
    overlayMenu.classList.add("closeMenu");
  } else {
    overlayMenu.classList.add("openMenu");
    overlayMenu.classList.remove("closeMenu");
  }
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

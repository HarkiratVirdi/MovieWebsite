const hamburger = document.querySelector(".fa-bars");
const overlayMenu = document.querySelector(".overlay__menu");
const cross = document.querySelector(".overlay__menu_cross");
const headerFloating = document.getElementById("header_floating_container");


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
  
  if(scrollingTop > 500)
  {
    headerFloating.classList.add("header_floating_active");
  }else{
    headerFloating.classList.remove("header_floating_active");
  }

};



const headerDropdown = document.querySelector(".header_dropdown");
if(headerDropdown)
{
  const t = gsap.timeline({ paused: true }).to(headerDropdown.children, {
    stagger: 0.1,
    opacity: 1,
    visibility: "visible",
    ease: "power2.out",
  });
console.log("dont know what's happen");

const showDropdown = (e) => {
  if (e.type === "mouseover") {
    console.log("animation start");
    t.play();
  } else if(e.type === "mouseout") {
    console.log("animation end");
    t.reverse();
  }
  console.log(e);
  
};

headerDropdown.addEventListener("mouseover", showDropdown);
headerDropdown.addEventListener("mouseout", showDropdown);
}


const headerFloatingDropdown = document.querySelector(
  "#header_floating_container .header_dropdown"
);

if(headerFloatingDropdown)
{
const t = gsap.timeline({ paused: true }).to(headerFloatingDropdown.children, {
  stagger: 0.1,
  opacity: 1,
  visibility: "visible",
  ease: "power2.out",
});
console.log("dont know what's happen");

const showFloatDropdown = (e) => {
  if (e.type === "mouseover") {
    console.log("animation start");
    t.play();
  } else if (e.type === "mouseout") {
    console.log("animation end");
    t.reverse();
  }
  console.log(e);
};

headerFloatingDropdown.addEventListener("mouseover", showFloatDropdown);
headerFloatingDropdown.addEventListener("mouseout", showFloatDropdown);
}
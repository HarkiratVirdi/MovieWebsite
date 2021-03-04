import "./cursor.js";
import "./menu.js";
// import "./barba.js";
// AOS.init();


let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
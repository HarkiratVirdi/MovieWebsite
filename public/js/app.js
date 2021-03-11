import "./cursor.js";
import "./menu.js";


progressively.init({
  delay: 50,
  throttle: 300,
  smBreakpoint: 600,
});

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});



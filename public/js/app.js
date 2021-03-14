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

const anchorTags = document.querySelectorAll("a");

console.log(anchorTags);
const loader = document.querySelector(".animateLoader");

const pageAnimationOnClick = (e) => {
e.preventDefault();
  const findAnchorTag = e.path.find(single => {
      return single.href !== undefined;
  });

const linkToNavigate = findAnchorTag.href;
console.log(linkToNavigate);

if(linkToNavigate !== location.href)
{
 loader.classList.add("animateLoader-active");
 loader.classList.remove("animateLoader-notActive");


   setTimeout(() => {
     loader.classList.add("animateLoader-notActive");
     loader.classList.remove("animateLoader-active");
   }, 2000);


   setTimeout(() => {
     location.href = linkToNavigate;
   }, 200);

}}

anchorTags.forEach(anchor => {
  anchor.addEventListener("click", pageAnimationOnClick);
});
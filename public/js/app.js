import "./cursor.js";
import "./menu.js";


progressively.init({
  delay: 30,
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
const loader = document.querySelector(".animateLoader");


const applyClassToLoader = () => {
  loader.classList.remove("animateLoader-notActive");
 loader.classList.add("animateLoader-active");
}

const pageAnimationOnClick = (e) => {
e.preventDefault();
  const findAnchorTag = e.path.find(single => {
      return single.href !== undefined;
  });

const linkToNavigate = findAnchorTag.href;

if(linkToNavigate !== location.href)
{
  applyClassToLoader();
   setTimeout(() => {
     location.href = linkToNavigate;
   }, 100);

}}

anchorTags.forEach(anchor => {
  anchor.addEventListener("click", pageAnimationOnClick);
});

const initialAnimation = () => {
 setTimeout(() => {
   loader.classList.remove("animateLoader-active");
   loader.classList.add("animateLoader-notActive");
 }, 200);
};

initialAnimation();

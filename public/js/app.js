import "./cursor.js";
import "./menu.js";
import "./pageAnimation.js";
import "./vhFix.js";
import "./addToCart.js";

progressively.init({
  throttle: 300,
  smBreakpoint: 600,
});





const changeColors = ['.header_search_mobile', ".fa-bars", '.header_search'];

const getThemeColor = () => {
  const themeColor = localStorage.getItem("mflixBlack");
  if(themeColor === "true")
  {
    console.log("black theme");
     document.body.classList.remove("themeChanger");
     document.body.style.background = "#121212";
    changeColors.forEach((el) => {
        document.querySelector(el).style.color = "white";
      })
      // changeLinkColors("white");
      
    }else if(themeColor === "false"){
      console.log("white theme");
      document.body.classList.add("themeChanger");
      document.body.style.background = "#fff";
      changeColors.forEach((el) => {
        document.querySelector(el).style.color = "black";
      });
      // changeLinkColors("black");
  }else{
    document.body.style.background = "#121212";
  }
}

getThemeColor();

const theme = document.querySelector(".theme");

let isThemeBlack = true;

const changeTheme = (e) => {
  e.preventDefault();
  document.body.classList.toggle("themeChanger");
  
  if(document.body.classList.contains("themeChanger"))
  {
    // document.body.style.background = "#fff";
    isThemeBlack = false;
  }else{
    isThemeBlack = true;
    // document.body.classList.remove("themeChanger");
    // document.body.style.background = "#121212";
  }
  console.log("setting theme", isThemeBlack);
  localStorage.setItem("mflixBlack", isThemeBlack);
  getThemeColor();
}

theme.addEventListener("click", changeTheme);



//important for bug fix in google chrome. Otherwise works fine in mozilla.
const headerContainer = document.getElementById("header_container");

console.log("location", window.location.pathname);
if(window.location.pathname === '/')
{
  headerContainer.style.position = "relative";
}
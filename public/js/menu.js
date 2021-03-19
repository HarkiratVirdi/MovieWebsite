const hamburger = document.querySelector(".fa-bars");
const overlayMenu = document.querySelector(".overlay__menu");
const cross = document.querySelector(".overlay__menu_cross");
const headerFloating = document.getElementById("header_floating_container");
const headerDropdown = document.querySelector(".header_dropdown");
const search = document.querySelector(".header_search");
const searchMobile = document.querySelector(".header_search_mobile");
const searchFloating = document.querySelector(".header_floating_search");
const searchBox = document.getElementById("searchBox");
const searchClose = document.querySelector(".search_close");
const searchContainer = document.querySelector(".search_overflow");
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


const searchTerm = () => {  
  searchBox.classList.add("show");
  searchClose.classList.add("show");
  searchContainer.classList.add("show");
}

const searches = [search, searchFloating, searchMobile];
searches.forEach((s) => {
  s.addEventListener("click", searchTerm)
})

const closeSearchTerm = () => {
  searchBox.classList.remove('show');
  searchClose.classList.remove('show');
  searchContainer.classList.remove("show");
}

searchClose.addEventListener("click", closeSearchTerm);


const makeMovieList = (details) => {

 
}


const removeAllDynamicElements = () => {
  document.querySelectorAll(".new").forEach((e) => {
    e.remove();
  });
}

const searchMovies = async (e) => {
  const searchTerm = e.target.value;

  setTimeout(async () => {   
  const fetchingMovies = await fetch("/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchTerm: searchTerm }),
  });

  const content = await fetchingMovies.json();
  
  if(content)
  {
    removeAllDynamicElements();

      content.data.forEach((d) => {
          let newAnchorTag = document.createElement("a");
          newAnchorTag.href = `/list/${d._id}`;


          document.createTextNode(d.name);
          let newImg = document.createElement("img");
          newImg.classList.add("search_movieImg", "new");
          newImg.src = d.img_s;



          newAnchorTag.classList.add("h-4", "new", "mb-s", "each_movie");
           newAnchorTag.appendChild(newImg, newContent);
          searchContainer.append(newAnchorTag);
      });
  }
  }, 500);

}




searchBox.addEventListener("keyup", searchMovies);
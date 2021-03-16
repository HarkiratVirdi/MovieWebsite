const cursor = document.querySelector(".cursor_js");
const swiperContainer = document.querySelectorAll(".swiper-container");
const imgs = document.querySelectorAll("img");
const arrowLeft = document.querySelector(".hero_arrows_left");
const arrowRight = document.querySelector(".hero_arrows_right");

imgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    cursor.style.backdropFilter = "invert(.7)";
    // cursor.style.backdropFilter = "invert(.7)";
    cursor.style.border = "none";
  });
  img.addEventListener("mouseleave", () => {
    cursor.style.backdropFilter = "none";
    cursor.style.border = "1.5px solid white";
  });
});

const animateCursor = (e) => {
  cursor.style.transform = `matrix(1, 0, 0, 1, ${e.pageX}, ${
    e.pageY - bodyScroll()
  }) translate(-50%, -50%)`;
  cursor.style.top = "0px";
};

const bodyScroll = () => {
  return document.documentElement.scrollTop;
};

const dragCursor = () => {
  cursor.classList.add('cursor_js-drag');
  // document.body.style.cursor = 'grab';
}


document.addEventListener("mousedown", () => {
  gsap.to(cursor, {
    height: "3rem",
    width: "3rem",
    duration: "0.2"
  })
})



const leftCursor = () => {
  cursor.classList.add("cursor_left");
}

const rightCursor = () => {
  cursor.classList.add("cursor_right");
}


document.addEventListener("mouseup", () => {
  // cursor.style.width = '4rem';
  // cursor.style.height = '4rem';
  gsap.to(cursor, {
    height: "4rem",
    width: "4rem",
    duration: "0.2",
  });
})

const normalCursor = () => {
  cursor.classList.remove('cursor_js-drag');
  cursor.classList.remove("cursor_right");
  cursor.classList.remove("cursor_left");
  document.body.style.cursor = "default";
}


swiperContainer.forEach(element => {
  element.addEventListener("mouseenter", dragCursor)
  element.addEventListener('mouseleave', normalCursor);
});

window.addEventListener("scroll", bodyScroll);

if(arrowLeft && arrowRight)
{
  arrowLeft.addEventListener("mouseenter", leftCursor);
  arrowRight.addEventListener("mouseenter", rightCursor);
  arrowLeft.addEventListener("mouseleave", normalCursor);
  arrowRight.addEventListener("mouseleave", normalCursor);
}
document.addEventListener("mousemove", animateCursor);

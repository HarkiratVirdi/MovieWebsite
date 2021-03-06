const cursor = document.querySelector(".cursor_js");
const swiperContainer = document.querySelectorAll(".swiper-container");
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    cursor.style.backdropFilter = "invert(.7)";
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
  console.log("in Swiper container");
  cursor.classList.add('cursor_js-drag');
  // document.body.style.cursor = 'grab';
}


document.addEventListener("mousedown", () => {
  cursor.style.width = '3rem';
  cursor.style.height = '3rem';
})


document.addEventListener("mouseup", () => {
  cursor.style.width = '4rem';
  cursor.style.height = '4rem';
})

const normalCursor = () => {
  cursor.classList.remove('cursor_js-drag');
  // document.body.style.cursor = 'auto';
}

document.addEventListener("mousemove", animateCursor);

swiperContainer.forEach(element => {
  element.addEventListener("mouseenter", dragCursor)
  element.addEventListener('mouseleave', normalCursor);
});

window.addEventListener("scroll", bodyScroll);

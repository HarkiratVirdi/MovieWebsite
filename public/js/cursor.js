const cursor = document.querySelector(".cursor_js");

const imgs = document.querySelectorAll("img");

console.log(imgs);

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

document.addEventListener("mousemove", animateCursor);

window.addEventListener("scroll", bodyScroll);

let container = document.querySelector(".container");
let slider = document.querySelector(".slider");
let before = document.querySelector(".image-container-original");
let after = document.querySelector(".image-container-edited");

let dragSlider = (e) => {
  let width = e.x - container.getBoundingClientRect().left;
  before.style.width = width + "px";
  slider.style.left = width + "px";
};

container.addEventListener("mousemove", dragSlider);

let manu = document.querySelector(".manu__links");
let links = document.querySelector(".links");

manu.onclick = function () {
  links.classList.toggle("active");
};

// importando
import Slider from './slider.js';


//slider
const galeria = document.getElementById("galeria-slider");
const galeriaSlider = new Slider(galeria);
galeriaSlider.buttonActive();

//menu
let menuHamburger = document.querySelector(".menu__hamburger");
let menuList = document.querySelector(".menu__list");
let menuClose = document.querySelector(".menu__item--close");
menuClose.addEventListener("click", menuToggle);
menuHamburger.addEventListener("click", menuToggle);
function menuToggle() {
  menuList.classList.toggle("menu__list--expanded");
}
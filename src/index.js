import css from "./styles.css";

/* Dropdown Menu */

// Get all the dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all the dropdown elements
dropdowns.forEach((dropdown) => {
  // Get inner elements on each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Click event on select element
  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // Loop through option elements
  options.forEach((option) => {
    // Add a click event to the option element
    option.addEventListener("click", () => {
      console.log(option);
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      // Remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // Add active class to clicked option
      option.classList.add("active");
    });
  });
});

/* NavBar and mobile menu */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("navLinksOpen");
});

/* Slider */
function setSliderSize() {
  const windowWidth = window.innerWidth;
  const sliderWidth = windowWidth * 0.7;
  const sliderHeight = (sliderWidth / 3) * 2;
  const slidesWidth = sliderWidth * 4;
  console.log(sliderWidth);

  const slider = document.querySelector(".slider");
  const slides = document.querySelector(".slides");
  const slideAll = document.querySelectorAll(".slide");
  const imagesAll = document.querySelectorAll("img");

  slider.style.width = sliderWidth + "px";
  slider.style.height = sliderHeight + "px";
  slides.style.width = slidesWidth + "px";
  slides.style.height = sliderHeight + "px";
  slideAll.forEach((slide) => {
    slide.style.width = sliderWidth + "px";
    slide.style.height = sliderHeight + "px";
  });
  imagesAll.forEach((image) => {
    image.style.width = sliderWidth + "px";
    image.style.height = sliderHeight + "px";
  });
}

window.addEventListener("resize", setSliderSize);

window.dispatchEvent(new Event("resize"));

let sliderCounter = 1;

function automaticSlider() {
  const slide = document.querySelector("#radioButton" + sliderCounter);
  slide.checked = true;
  sliderCounter++;
  if (sliderCounter > 4) sliderCounter = 1;
}

setInterval(automaticSlider, 3000);

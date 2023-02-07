import css from "./styles.css";

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

  //Click event on select element
  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  //Loop through option elements
  options.forEach((option) => {
    //Add a click event to the option element
    option.addEventListener("click", () => {
      console.log(option);
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      //Remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
      //Add active class to clicked option
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

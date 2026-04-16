const hamMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector("ul.mobile-menu");
const btnClsMobile = document.querySelector("nav ul.mobile-menu .close-btn");


//Menu Hamburger saat di klik
hamMenu.addEventListener("click", () => {
  if (hamMenu.classList.contains("is-active")) {
    hamMenu.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
  } else {
    hamMenu.classList.add("is-active");
    mobileMenu.classList.add("is-open");
  }
});

//Menu Close pada mobile
btnClsMobile.addEventListener("click", () => {
  hamMenu.classList.remove("is-active");
  mobileMenu.classList.remove("is-open");
})

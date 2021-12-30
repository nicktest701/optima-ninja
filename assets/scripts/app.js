let menu = document.querySelector(".menu");
let navbar = document.querySelector(".nav-bar");
let navItems = document.querySelectorAll(".nav-item-link");
let scrollToTop = document.querySelector(".scroll-to-top");

menu.addEventListener("click", (e) => {
  navbar.classList.toggle("close");
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navbar.classList.remove("close");
  }
});

window.addEventListener("scroll", (e) => {
  // 1170
  //5100
  window.scrollY < 1170
    ? (scrollToTop.style.display = "none")
    : (scrollToTop.style.display = "grid");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    console.log("hello");
    navbar.classList.remove("close");
  });
});

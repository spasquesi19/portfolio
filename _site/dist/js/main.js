const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuHello = document.querySelector(".menu-hello");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu) {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuHello.classList.remove("show");
    navItems.forEach(item => {
      item.classList.remove("show");
    });

    showMenu = false;
  } else {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuHello.classList.add("show");
    navItems.forEach(item => {
      item.classList.add("show");
    });

    showMenu = true;
  }
}

const navbar = document.getElementById("navbar");
const openHamb = document.getElementById("open");
const closeHamb = document.getElementById("close");
const navItem = document.querySelectorAll(".nav-item");

openHamb.addEventListener("click", () => {
    navbar.classList.toggle("navbar-visible");
});

closeHamb.addEventListener("click", () => {
    navbar.classList.toggle("navbar-visible");
});

const navItemArray = Array.from(navItem);
navItemArray.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("navbar-visible");
    });
});
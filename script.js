let menuIcon = document.getElementById("menu-icon");
let menu = document.querySelector(".menu");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-list");
    menuIcon.classList.toggle("fa-times");
    menu.classList.toggle("open");
};

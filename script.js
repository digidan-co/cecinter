const toggle = document.querySelector(".header__toggle")
const submenu = document.querySelector(".submenu")

toggle.addEventListener("click", () => {
    submenu.classList.toggle("toggle-activo")
})
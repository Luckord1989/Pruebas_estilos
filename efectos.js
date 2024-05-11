let nav = document.querySelector(".nav");
let button = nav.children[0];
let button_icon = document.querySelector(".button__icon");

button.addEventListener("click", () => {
    button_icon.classList.toggle("giro");
    
    if (nav.clientWidth == "40") {
        nav.style.width = "300px";
    } else {
        nav.style.width = "40px";
    }
});

// Declaramos las clases a emplear
// Clase de los item con menu
let items_menu = document.querySelectorAll(".list__item--click");
//Clase de los botones
//Mostramos menu
items_menu.forEach(item_menu => {
    let button_menu = item_menu.children[0];
    button_menu.addEventListener("click", () => {
        button_menu.classList.toggle("arrow");
        menu = button_menu.nextElementSibling;
        if (menu.clientHeight == "0") {
            menu.style.height = menu.scrollHeight + "px";
        } else {
            menu.style.height = "0px";
        }
    });

});




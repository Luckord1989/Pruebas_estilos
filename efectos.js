// Declaramos las clases a emplear
// Obtenemos la clase "nav"
let nav = document.querySelector(".nav");
// Obtenemos el primer "button"
let button = nav.children[0];
// Obtenemos los "lis__item--click"
let items_menu = document.querySelectorAll(".list__item--click");
// Desarrollo
// Cuando se hace click en el icono
button.addEventListener("click", () => {
    button.classList.toggle("giro");
    if (nav.clientWidth == "40") {
        mostrar_menu();
    } else {
        ocultar_menu();
    }
});
//Funciones
//Mostrar menu
function mostrar_menu() {
    nav.style.width = "300px";
    mostrar_sub_menu();
}
//Ocultar menu
function ocultar_menu() {
    nav.style.width = "40px";
    ocultar_sub_menu();
}
//Mostrar sub-menu
function mostrar_sub_menu() {
    items_menu.forEach(item_menu => {
        var button_menu = item_menu.children[0];
        button_menu.classList.remove("arrow");
        button_menu.addEventListener("click", () => {
            button_menu.classList.toggle("arrow");
            var menu = button_menu.nextElementSibling;
            if (menu.clientHeight == "0") {
                menu.style.height = menu.scrollHeight + "px";
            } else {
                menu.style.height = "0px";
            }
        });
    });
}
//Ocualtar sub-menu
function ocultar_sub_menu() {
    items_menu.forEach(item_menu => {
        var button_menu = item_menu.children[0];
        button_menu.classList.remove("arrow");
        var menu = item_menu.children[1];
        menu.style.height = "0px";
        button_menu.addEventListener("click", () => {
            button_menu.classList.toggle("arrow");
            menu.style.height = "0px";
        });
    });
}
//Ocultar otros sub-menu
function ocultar_otro_sub_menu(){
    items_menu.forEach(items_menu => {
        
    });
}
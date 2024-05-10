<<<<<<< HEAD
const media = window.matchMedia();
if
    alert(""+media);
=======
let listElements = document.querySelectorAll(".list__item--click");

listElements.forEach(listElement => {
    listElement.addEventListener("click",()=>{

        listElement.classList.toggle("arrow");

        let heigth = 0;

        let menu = listElement.nextElementSibling;

        console.log(menu.scrollHeight);      
    })
});
>>>>>>> 481cf04d08171a50e55f306fa27d19475323fcb8

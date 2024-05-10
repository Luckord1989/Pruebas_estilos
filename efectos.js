let listElements = document.querySelectorAll(".list__item--click");

listElements.forEach(listElement => {
    listElement.addEventListener("click",()=>{

        listElement.classList.toggle("arrow");

        let heigth = 0;

        let menu = listElement.nextElementSibling;

        console.log(menu.scrollHeight);      
    })
});
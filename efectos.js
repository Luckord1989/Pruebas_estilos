var listElements = document.querySelectorAll(".list__button--click");

listElements.forEach(listElement => {
    listElement.addEventListener("click",()=>{

        listElement.classList.toggle("arrow");

        let heigth = 0;

        let menu = listElement.nextElementSibling;
        
        if(menu.clientHeight == "0"){
            heigth = menu.scrollHeight;
        }

        menu.style.heigth = `${heigth}px`;

    })
});

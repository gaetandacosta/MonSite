let bar = document.getElementById('navBar');
let listSousMenu = bar.querySelectorAll('.sous-menu');
let listHoverText = bar.querySelectorAll('.hover-text');

for (let index = 0; index < listSousMenu.length; index++) {
    listSousMenu[index]
    .addEventListener('mouseover', () => {
        listHoverText[index].classList.add('hover-js');
        listSousMenu[index].style.zIndex = "9";
        listText[index].classList.add('black-text');
    })
    listSousMenu[index]
    .addEventListener('mouseleave', () => {
        listHoverText[index].classList.remove('hover-js')
        listSousMenu[index].style.zIndex = "7";
        listText[index].classList.remove('black-text');
    })

}
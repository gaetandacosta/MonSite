let bar = document.getElementById('navBar');
let listBouton = bar.querySelectorAll('a');
let listSousMenu = bar.querySelectorAll('.sous-menu');
let listHoverText = bar.querySelectorAll('.hover-text');

for (let index = 0; index < listBouton.length; index++) {
    listSousMenu[index].addEventListener('mouseover', () => {
        listHoverText[index].style.color = 'green';
        console.log('Déclenché');
    })

}
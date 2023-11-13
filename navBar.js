let bar = document.getElementById('navBar');
let listBouton = bar.querySelectorAll('a');
let listSousMenu = bar.querySelectorAll('.sous-menu');
let listHoverText = bar.querySelectorAll('.hover-text');

for (let index = 0; index < listBouton.length; index++) {
    listSousMenu[index].addEventListener('mouseover', () => {
        listHoverText[index].style.width= '100%';
        listHoverText[index].style.filter= 'drop-shadow(0 0 23px #F5CB5C)';
        console.log('Déclenché');
    })

}
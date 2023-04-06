
for(let i = 1; i<3;i++){

    console.log("Carroussel_" + i)
    let carrousel = document.getElementById("carrousel_"+i)
    console.log(carrousel)

let diapos = carrousel.querySelectorAll("div");
let index = 0;
let btnPrev = carrousel.querySelector(".prev");
let btnNext = carrousel.querySelector(".next");
function afficherDiapo() {
    for (let i = 0; i < diapos.length; i++) {
        diapos[i].classList.remove("active");
    }
    diapos[index].classList.add("active");
}

function diapoSuivante() {
    index++;
    if (index >= diapos.length) {
        index = 0;
    }
}
function diapoPrecedente() {
    index--;
    if (index < 0) {
        index = diapos.length - 1;
    }
}

btnPrev.addEventListener("click", function() {
    diapoPrecedente();
    afficherDiapo();
});

btnNext.addEventListener("click", function() {
    diapoSuivante();
    afficherDiapo();
});

afficherDiapo();
}
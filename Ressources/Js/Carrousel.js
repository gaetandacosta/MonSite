
let proj = document.getElementById("proj")
let listeDivProjets = proj.querySelectorAll(".total_projet")
for (const projet of listeDivProjets) {
    





    let carrousel = projet.querySelector("div")



let diapos = carrousel.querySelectorAll("div");
let index = 0;
let btnPrev = carrousel.querySelector(".btn-carrousel.prev");
let btnNext = carrousel.querySelector(".btn-carrousel.next");
btnPrev.addEventListener("click", function() {
    diapoPrecedente();
    afficherDiapo();
});

btnNext.addEventListener("click", function() {
    diapoSuivante();
    afficherDiapo();
});
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



afficherDiapo();
}

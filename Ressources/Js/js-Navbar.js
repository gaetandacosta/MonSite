(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

let idBoutonOuvert = null;
let boutons = document.getElementById("boutons")
let ulBouton = boutons.querySelectorAll("li");

for (const bouton of ulBouton) {
    fermeAll();
    let boutonClick = bouton.querySelectorAll("button")
    for (const boutonClickElement of boutonClick) {
        boutonClickElement.addEventListener("click", function () {
                if (boutonClickElement.getAttribute("aria-expanded") === "true") {
                    fermeAll()
                } else {
                    idBoutonOuvert = boutonClickElement.id;
                    fermeAll()
                    ouvre(idBoutonOuvert)
                }
            }
        )
    }
}


function visible(e) {
    e.classList.remove("cache");
    e.classList.add("visible");

}

function cacher(im) {
    im.classList.remove("visible");
    im.classList.add("cache");
}


function fermeAll() {
    for (const bouton of ulBouton) {
        let sousTitre = bouton.querySelectorAll("div")
        for (const sousTitreElement of sousTitre) {
            cacher(sousTitreElement)
        }
        let boutonClick = bouton.querySelectorAll("button")

        for (const b of boutonClick) {
            if(b.getAttribute("aria-expanded")==="true"){
                b.setAttribute("aria-expanded", "false");
            }if(!b.parentElement.classList.contains("mb-1")){
                b.parentElement.classList.add("mb-1")
            }if(b.parentElement.classList.contains("mb-2")){
                b.parentElement.classList.remove("mb-2")
            }
            console.log(b)
        }
    }
}

function ouvre(bid) {
    let bouton = document.getElementById(bid)
    let sousTitre = bouton.parentElement.querySelectorAll("div")
    console.log(sousTitre)
    for (const s of sousTitre) {
        visible(s)
    }
    bouton.parentElement.classList.add("mb-2")
    bouton.parentElement.classList.remove("mb-1")
    bouton.setAttribute("aria-expanded", "true");
}

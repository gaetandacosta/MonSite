(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

let boutons = document.getElementById("boutons")
let ulBouton = boutons.querySelectorAll("li");

for (const bouton of ulBouton) {
    let sousTitre = bouton.querySelectorAll("div")
    for (const sousTitreElement of sousTitre) {
        cacher(sousTitreElement)
    }
    let boutonClick = bouton.querySelectorAll("button")

    for (const boutonClickElement of boutonClick) {

        boutonClickElement.addEventListener("click", function () {
                for (const s of sousTitre) {
                    if (s.classList.contains("cache")) {
                        visible(s)
                    } else {
                        cacher(s)
                    }
                }
                console.log("Clique")
                if (boutonClickElement.getAttribute("aria-expanded") === "true") {
                    boutonClickElement.parentElement.classList.remove("mb-2")
                    boutonClickElement.parentElement.classList.add("mb-1")
                    boutonClickElement.setAttribute("aria-expanded", "false");
                } else {
                    boutonClickElement.parentElement.classList.add("mb-2")
                    boutonClickElement.parentElement.classList.remove("mb-1")
                    boutonClickElement.setAttribute("aria-expanded", "true");
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
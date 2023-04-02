import * as Barre from './Barre.js';

let tabOutils = {
    "Git" : 97
}
/*
let tabDesc = { "PHP" : "Structure MVC, lien avec base de données PostGres, PHPMyAdmin",
    "JS" : "Requêtes AJAX, Listenner, pages intéractives",
    "HTML" : "Site Statique, mono page, plusieurs page",
    "JAVA" : "Différents Pattern : Composite, Visiteur, Observeur, Factory, Singleton, Proxy, Iterator",
    "SQL" : "Diférent SGBD, Oracle, PhpMyadmin, Postgres. Array, hstore, lateral, cross-join",
    "C" : "Lecture, Ecriture fichier, inversion pixel image"
}

function creerLangage(){
    for (const elem in tab) {

        let divDesc = document.createElement("div")
        let pDesc = document.createElement("p")
        pDesc.innerText = tabDesc[elem]
        divDesc.append(pDesc)
        divDesc.classList.add("desc")

        let divLang =  document.createElement("div")
        divLang.classList.add("lang")
        let labelLang = document.createElement("label")
        labelLang.innerText = elem
        let divProgress = document.createElement("div")
        divProgress.classList.add("Progress")
        divProgress.id = elem
        let divMaProgress = document.createElement("div")
        divMaProgress.id = elem+"_Progress"
        divMaProgress.classList.add("bar")

        divProgress.append(divMaProgress)
        divLang.append(labelLang, divProgress)



        divLangage.append(divLang, divDesc)
    }
}
*/



const observerOutils = new IntersectionObserver(entries => {
    // Boucler sur chaque entrée (élément) observé
    entries.forEach(entry => {
        // Vérifier si l'entrée est actuellement visible
        if (entry.isIntersecting) {
            // L'élément est entré dans la partie visible de la page
            let elemID = entry.target.id;
            // let id = setInterval(()=>{
            //     move(elemID, tab[elemID]);
            //     clearInterval(id)
            // }, 200)
            Barre.move(elemID, tabOutils);
            observerOutils.unobserve(entry.target)
        }
        /*
        work in progress
        else{
            entry.target.style.width = "0px"
        }

         */
    });
});



for (const elem in tabOutils) {
    let e = document.getElementById(elem)
    observerOutils.observe(e);
}





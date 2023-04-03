
let tabData = {
    "personnelle" : {
    labels: [
        'Curieux',
        'Combatif',
        'Communicatif',
        'Sociable'
    ],
        datasets: [{
        label: 'Qualités Personnelles',
        data: [23, 33, 19, 25],
        backgroundColor: [
            'rgb(255,99,99)',
            'rgb(54, 162, 235)',
            'rgb(54,235,96)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
},
    "professionnel" : {
        labels: [
            'Adaptation',
            'Motivé',
            'Contact avec la clientèle',
            'Travailleur'
        ],
        datasets: [{
            label: 'Compétences Professionelles',
            data: [40, 29, 13, 28],
            backgroundColor: [
                'rgb(133,24,24)',
                'rgb(32,94,136)',
                'rgb(35,154,63)',
                'rgb(206,158,44)'
            ],
            hoverOffset: 4
        }]
    }
}

let tabConfig = {
    "personnelle" : {
        type: 'doughnut',
        data: tabData['personnelle'],
    },
    "professionnel": {
        type: 'doughnut',
        data: tabData['professionnel'],
    }
}


let canva = document.getElementById("personnelle")
let canvapro = document.getElementById("professionnel")




const observer = new IntersectionObserver(entries => {
    // Boucler sur chaque entrée (élément) observé
    entries.forEach(entry => {
        // Vérifier si l'entrée est actuellement visible
        if (entry.isIntersecting) {
            // L'élément est entré dans la partie visible de la page

            // let id = setInterval(()=>{
            //     move(elemID, tab[elemID]);
            //     clearInterval(id)
            // }, 200)
            new Chart(entry.target,tabConfig[entry.target.id])
            observer.unobserve(entry.target)
        }
        /*
        work in progress
        else{
            entry.target.style.width = "0px"
        }

         */
    });
});

observer.observe(canva)
observer.observe(canvapro)
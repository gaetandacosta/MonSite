
let bouton = document.getElementById("copy")

bouton.addEventListener('click', function (){

    navigator.clipboard.writeText("0614856139")
    alert("Vous avez copié mon numéro : " + "0614856139");
})



let btn = document.getElementById("btn-home")

let image = document.querySelector("img")

btn.addEventListener("mouseenter", function (){
    image.src = "Ressources/images/yellow-arrow-up.png"
})
image.addEventListener("mouseenter", function (){
    image.src = "Ressources/images/yellow-arrow-up.png"
})
btn.addEventListener("mouseout", function (){
    image.src = "Ressources/images/black-arrow-up.png"
})

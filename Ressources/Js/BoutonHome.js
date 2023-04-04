let btn = document.getElementById("btn-home")

let image = document.querySelector("img")

btn.addEventListener("mouseover", function (){
    image.src = "Ressources/images/yellow-arrow-up.png"
})
btn.addEventListener("mouseout", function (){
    image.src = "Ressources/images/black-arrow-up.png"
})

btn.addEventListener("click", function () {
    document.location.href="#main";
})
let btn = document.getElementById("btn-home")

let image = document.querySelector("img")

btn.addEventListener("mouseover", function (){
    image.src = "https://cdn.discordapp.com/attachments/782961560061476894/1093527655078449213/yellow-arrow-up.png"
})
btn.addEventListener("mouseout", function (){
    image.src = "https://cdn.discordapp.com/attachments/782961560061476894/1093527644345225346/black-arrow-up.png"
})

btn.addEventListener("click", function () {
    document.location.href="#main";
})
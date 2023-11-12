const barre_lecture = document.getElementById('barre_lecture');
barre_lecture.style.display ="none";

let scroll = () => {
    barre_lecture.style.display = "block";
    const height = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const position = window.pageYOffset;

    const trackLenght = height - windowHeight;
    const percentage = Math.floor((position / trackLenght) * 100);
    

    barre_lecture.style.right = 85 - percentage + "%"
}

window.addEventListener('scroll', scroll);



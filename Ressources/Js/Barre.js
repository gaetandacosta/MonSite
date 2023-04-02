class Barre {
    constructor() {
    }

    static move(nom, tab) {
            let elem = document.getElementById(nom+"_Progress");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= tab[nom]) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
    }
  }
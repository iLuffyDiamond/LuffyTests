const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img"); // Corrigir o seletor

let idx = 0;

function carousel() {
    idx++;
    if (idx > img.length - 2) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 10}%)`; // Usar porcentagem
}

setInterval(carousel, 3000);

let images = [
    "./assets/img/1.png", "./assets/img/2.png", "./assets/img/3.png", "./assets/img/4.png", "./assets/img/5.png",
    "./assets/img/6.png", "./assets/img/7.png", "./assets/img/8.png"];
/*variables del cambio de color en mobil*/
let currentIndex = 0
let backgroundChange = document.querySelector(".carousel__images")
let backgroundColors = ["#87d0b7", "#00cac5", "#009ca8", "#0088af", "#f6e8a7"]

/*variables cambio de color en desktop*/

let advance = document.getElementById('advance');
let text = document.getElementById('texto');
let btnFavourite = document.querySelector(".Heart-Animation");
let current = 0;


advance.addEventListener('click', function () {
    // advanceImage(1);
    isMobile() ? backgroundChangeMobile() : advanceImage()
    //remueve la animacion del corazon rojo del siguiente fact
    btnFavourite.classList.remove("animate");
    //el corazon aparece al cuando le da click
    btnFavourite.classList.remove("hidden")
});
/*funcion que cambia los colores en mobile*/
function backgroundChangeMobile() {
    const currentColor = backgroundColors[currentIndex];
    backgroundChange.style.backgroundColor = currentColor;
    // Incrementa el índice y reinicia si llega al final del array
    currentIndex = (currentIndex + 1) % backgroundColors.length;

}
function isMobile() {
    return window.innerWidth <= 1000; // Ajusta el ancho según sea necesario
}

function advanceImage() {
    const currentImage = images[currentIndex];
    backgroundChange.style.backgroundImage = `url('${currentImage}')`;
    currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    backgroundChange.style.backgroundImage = `url('${images[currentIndex]}')`;
}



let images = [
    { "url": "./assets/img/1.png", },
    { "url": "./assets/img/2.png", },
    { "url": "./assets/img/3.png", },
    { "url": "./assets/img/4.png", },
    { "url": "./assets/img/5.png", },
    { "url": "./assets/img/6.png", },
    { "url": "./assets/img/7.png", },
    { "url": "./assets/img/8.png", },
];

let advance = document.getElementById('advance');
let image = document.getElementById('img');
let text = document.getElementById('texto');
let element = document.querySelector(".Heart-Animation");
let current = 0;


advance.addEventListener('click', function () {
    advanceImage(1);
    //remueve la animacion del corazon rojo del siguiente fact
    element.classList.remove("animate");
    //el corazon aparece al cuando le da click
    element.classList.remove("hidden")
});

function advanceImage(steps) {
    current = (current + steps) % images.length;
    console.log(current)
    image.innerHTML = ` <img class="carousel__img" src="${images[current].url}" alt="Image 1" loading="lazy">`;
}

document.addEventListener("DOMContentLoaded", function () {

    element.addEventListener("click", function () {
        element.classList.toggle("animate");
    })
});

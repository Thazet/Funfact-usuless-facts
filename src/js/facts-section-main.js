let images = [
    {
    "url": "./assets/img/1.png",
    },
    {
    "url": "./assets/img/2.png",
    },
    {
    "url": "./assets/img/3.png",
    },
    {
    "url": "./assets/img/4.png",
    },
    {
    "url": "./assets/img/5.png",
    },
];

let advance = document.getElementById('advance');
let image = document.getElementById('img');
let text = document.getElementById('texto');
let current = 0;

advance.addEventListener('click', function () {
    advanceImage(1);
});

function advanceImage(steps) {
    current = (current + steps) % images.length;

    image.innerHTML = ` <img class="carousel__img" src="${images[current].url}" alt="Image 1" loading="lazy">`;
}

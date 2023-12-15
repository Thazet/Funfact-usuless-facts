let images = [
    {
    "url": "./assets/img/1.jpg",
    "name": "The average person falls asleep in seven minutes.",
    "description": " If you like the content, give it a like and subscribe."
    },
    {
    "url": "./assets/img/2.jpg",
    "name": "The average person falls asleep in seven minutes",
    "description": "If you like the content, give it a like and subscribe."
    },
    {
    "url": "./assets/img/3.jpg",
    "name": "Reindeer like to eat bananas.",
    "description": " If you like the content, give it a like and subscribe."
    },
    {
    "url": "./assets/img/4.jpeg",
    "name": "Lorem ipsum dolor sit amet consectetur",
    "description": "If you like the content, give it a like and subscribe."
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
    text.innerHTML = `
        <h3 class="carousel__title">${images[current].name}</h3>
        <p class="carousel__description">${images[current].description}</p>
        `;
}

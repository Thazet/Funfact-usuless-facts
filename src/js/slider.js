document.getElementById('nav-slider__prev').addEventListener('click', function () {
    let cardsContainer = document.getElementById('slider-cards');
    let scrollAmount = -500;

    cardsContainer.scrollTo({
        left: cardsContainer.scrollLeft + scrollAmount,
        behavior: 'smooth'
    });
});

document.getElementById('nav-slider__next').addEventListener('click', function () {
    let cardsContainer = document.getElementById('slider-cards');
    let scrollAmount = 500;

    cardsContainer.scrollTo({
        left: cardsContainer.scrollLeft + scrollAmount,
        behavior: 'smooth'
    });
});


//animation heart css
document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".heart-animation");
    elements.forEach(function (element) {
        element.addEventListener("click", function () {
            this.classList.toggle("animate");
        });
    });
});

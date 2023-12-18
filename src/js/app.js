import { backgroundChangeMobile, isMobile, advanceImage } from "./facts-section-main.js"
import { createSlider } from "./slider.js"

const btnFact = document.querySelector(".carousel__change-image-button");
const factTitle = document.querySelector(".carouser__facts");
const titleHome = document.querySelector(".carousel__title-home");
const navLinkFavourite = document.querySelector("#nav-favourites")
const homeCarousel = document.querySelector(".carousel")
const sectionFavourite = document.querySelector(".container-favorite")
const containerFavoriteSlider = document.querySelector(".container-favorite__slider")
const btnFavourite = document.querySelector(".Heart-Animation")
let currentFact
let arrayFavourite = []

const getRamdomFacts = async () => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = response.json();
        return data
    } catch (error) {
        console.log("Error");

    }

}
/* function para que no ingresen dos favorites del mismo array */
const addFavoriteFact = (currentFact) => {
    const findIndexFact = arrayFavourite.findIndex(el => el.id === currentFact.id);

    if (findIndexFact === -1) {
        arrayFavourite.push(currentFact)
    } else {
        arrayFavourite.splice(findIndexFact, 1)
    }
}


/* animacion del btm corazon*/

document.addEventListener("DOMContentLoaded", function () {
    btnFavourite.addEventListener("click", function () {
        addFavoriteFact(currentFact)
        btnFavourite.classList.toggle("animate")
    })
    advance.addEventListener('click', function () {
        // advanceImage(1);
        isMobile() ? backgroundChangeMobile() : advanceImage()
        //remueve la animacion del corazon rojo del siguiente fact
        btnFavourite.classList.remove("animate");
        //el corazon aparece al cuando le da click
        btnFavourite.classList.remove("hidden")
    });


    btnFact.addEventListener("click", async () => {
        const data = await getRamdomFacts()
        currentFact = data
        factTitle.textContent = data.text;
        titleHome.classList.add("hidden")

    });
    /* recuperamos el link para ir a la section favoritos*/
    navLinkFavourite.addEventListener("click", () => {
        homeCarousel.classList.add("hidden")
        sectionFavourite.classList.remove("hidden")

        if (arrayFavourite.length === 0) {
            containerFavoriteSlider.innerHTML = `<p>No tienes favoritos aún</p>`
        }
        else {
            const menuSlider = createSlider(arrayFavourite)
            containerFavoriteSlider.appendChild(menuSlider)
            document.getElementById('nav-slider__prev').addEventListener('click', function () {
                let cardsContainer = document.getElementById('slider-container-cards');
                let scrollAmount = -500;

                cardsContainer.scrollTo({
                    left: cardsContainer.scrollLeft + scrollAmount,
                    behavior: 'smooth'
                });
            });

            document.getElementById('nav-slider__next').addEventListener('click', function () {
                let cardsContainer = document.getElementById('slider-container-cards');
                let scrollAmount = 500;

                cardsContainer.scrollTo({
                    left: cardsContainer.scrollLeft + scrollAmount,
                    behavior: 'smooth'
                });
            });
        }

    })


});

export {addFavoriteFact, getRamdomFacts}









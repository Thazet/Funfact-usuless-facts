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
const footerContact = document.querySelector(".footer")
let currentFact
let arrayFavourite = JSON.parse(localStorage.getItem("arrayFavourite")) || [];


const getRamdomFacts = async () => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = response.json();
        return data
    } catch (error) {
        console.log("Error");

    }

}
/* function para agregar o eliminar favoritos que no ingresen dos favorites del mismo array */
const addFavoriteFact = (currentFact) => {
    const findIndexFact = arrayFavourite.findIndex(el => el.id === currentFact.id);

    if (findIndexFact === -1) {
        arrayFavourite.push(currentFact)
    } else {
        arrayFavourite.splice(findIndexFact, 1)
    }
    localStorage.setItem("arrayFavourite", JSON.stringify(arrayFavourite));
}

/* animacion del boton corazon*/
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
        localStorage.setItem("arrayFavourite", JSON.stringify(arrayFavourite));
        /* se desactiva el click del enlace para que no mueste mas favoritos*/
        navLinkFavourite.style.pointerEvents = "none";
        navLinkFavourite.style.cursor = "none"
        /*quitando la clase de la section cuando este en css*/
        footerContact.classList.add("footer-contact")

        if (arrayFavourite.length === 0) {
            containerFavoriteSlider.innerHTML = `<div class="container-no-favourite">
            <img src="./assets/img/icon-broken-heart.png" alt="corazon roto">
            <p>No tienes favoritos aún :(</p>
            </div>`
        }
        else {
            const menuSlider = createSlider(arrayFavourite)
            containerFavoriteSlider.appendChild(menuSlider)
            const favoriteButtons = document.querySelectorAll(".animate")

            favoriteButtons.forEach((favourite) => {
                favourite.addEventListener("click", (event) => {
                    const heartClicked = event.target
                    heartClicked.parentElement.parentElement.remove()
                    const factTitle = heartClicked.parentElement.querySelector("p")
                    const findIndexFact = arrayFavourite.findIndex(el => el.text === factTitle.textContent);
                    arrayFavourite.splice(findIndexFact, 1)
                    localStorage.setItem("arrayFavourite", JSON.stringify(arrayFavourite));
                    if (arrayFavourite.length === 0) {
                        const clicEvent = new Event("click");
                        navLinkFavourite.dispatchEvent(clicEvent)
                    }
                })
            })
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

export { addFavoriteFact, getRamdomFacts }









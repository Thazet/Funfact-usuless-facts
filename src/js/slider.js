/*funcion que cree los cards*/
export const createSlider = (arrayFavourite) => {
    const menuSlider = document.createElement("div");
    menuSlider.id = "menu-slider";

    // Crear el elemento div con id="nav-slider"
    const navSlider = document.createElement("div");
    navSlider.id = "nav-slider";

    // Crear el elemento div con id="nav-slider__prev"
    const navPrev = document.createElement("div");
    navPrev.id = "nav-slider__prev";

    // Crear la imagen dentro de div#nav-slider__prev
    const prevImage = document.createElement("img");
    prevImage.src = "./assets/img/previus-icon.svg";
    prevImage.alt = "icons previus";
    navPrev.appendChild(prevImage);

    // Crear el elemento div con id="nav-slider__next"
    const navNext = document.createElement("div");
    navNext.id = "nav-slider__next";

    // Crear la imagen dentro de div#nav-slider__next
    const nextImage = document.createElement("img");
    nextImage.src = "./assets/img/next-icon.svg";
    nextImage.alt = "icons next";
    navNext.appendChild(nextImage);

    // Agregar div#nav-slider__prev y div#nav-slider__next a div#nav-slider
    navSlider.appendChild(navPrev);
    navSlider.appendChild(navNext);

    // Crear el elemento ul con id="slider-container-cards"
    const sliderContainer = document.createElement("ul");
    sliderContainer.id = "slider-container-cards";


    for (let i = 0; i < arrayFavourite.length; i++) {
        const listItem = document.createElement("li");
        listItem.id = "box1";
        listItem.classList.add("slider__card");

        // Crear el contenido interno del li
        const innerContent = document.createElement("div");
        innerContent.classList.add("content-slider__card");

        // Agregar la animación del corazón
        const heartAnimation = document.createElement("div");
        heartAnimation.classList.add("heart-animation", "animate");
        /* en caso se clicka el corazon en la pestaña favoritos eliminara su padre contenedor*/
        heartAnimation.addEventListener("click", (event) => {
            const heartClicked = event.target
            heartClicked.parentElement.parentElement.remove()
        })

        innerContent.appendChild(heartAnimation);

        // Agregar el párrafo
        const paragraph = document.createElement("p");
        paragraph.textContent = arrayFavourite[i].text;
        innerContent.appendChild(paragraph);

        // Agregar el contenido interno al li

        // Agregar div#nav-slider y ul#slider-container-cards a div#menu-slider
        listItem.appendChild(innerContent);
        sliderContainer.appendChild(listItem);


    }
    menuSlider.appendChild(navSlider);
    menuSlider.appendChild(sliderContainer);
    return menuSlider
}

document.addEventListener('DOMContentLoaded', () => {

})

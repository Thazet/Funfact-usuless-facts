const navLinkFavourite = document.querySelector("#nav-favourites")
const homeCarousel = document.querySelector(".carousel")
const sectionFavourite = document.querySelector(".container-favorite")

navLinkFavourite.addEventListener("click", () => {
    homeCarousel.classList.add("hidden")
    sectionFavourite.classList.remove("hidden")
})
const btnFact = document.querySelector(".carousel__change-image-button");
const factTitle = document.querySelector(".carouser__facts");
const titleHome = document.querySelector(".carousel__title-home");

const getRamdomFacts = async () => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = response.json();
        return data
    } catch (error) {
        console.log("Error");

    }

}
btnFact.addEventListener("click", async () => {
    const data = await getRamdomFacts();
    factTitle.textContent = data.text;
    titleHome.classList.add("hidden")

});

document.addEventListener("DOMContentLoaded", function () {
    btnFavourite.addEventListener("click", function () {
        btnFavourite.classList.toggle("animate");
    })
});



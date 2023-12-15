const btnFact = document.querySelector(".carousel__change-image-button");
const factsH3 = document.querySelector(".carousel__title");
const getRamdomFacts = async() => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = response.json();
        return data
    } catch (error) {
        console.log("Error");
        
    }  

}
btnFact.addEventListener("click", async() =>{
    const data = await getRamdomFacts();
    factsH3.textContent = data.text;
});



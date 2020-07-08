let buttonImage = document.getElementById('cardImage').addEventListener('click', imagePressed);
let body = document.querySelector('body');
let bodyHeader = document.querySelector('#bodyHeader');
let title = document.getElementById('title');
let mainContainer = document.querySelector('#mainContainer');
let card = document.querySelector('#card');
let cardTitle = document.querySelector('#cardTitle');

function imagePressed() {
    assignColorsToElemets();
}

function randomizeRGB(colorVariable) {
    let red = 1;
    let green = 1;
    let blue = 1;

    function randomNumber(toBeRandom) {
        toBeRandom = Math.floor(Math.random() * 256);
        return toBeRandom;
    }
    colorVariable = `rgb(${randomNumber(red)}, ${randomNumber(green)}, ${randomNumber(blue)})`;
    return colorVariable;
}

function assignColorsToElemets() {
    // Placeholder Variable For Use in randomizeRGB()
    let tempColorVar = "";
    // Assigning Random Colors To BACKGROUND Color Variables
    const backgroundPrimary = randomizeRGB(tempColorVar);
    const backgroundTertiary1 = randomizeRGB(tempColorVar);
    const backgroundTertiary2 = randomizeRGB(tempColorVar);
    // Assigning Random Colors To FONT Color Variables
    const textTitle = randomizeRGB(tempColorVar);
    const textPrimary = randomizeRGB(tempColorVar);

    // Assigning Color Variables to Document Objects
    // BACKGROUND primary
    body.style.backgroundColor = backgroundPrimary;
    // BACKGROUND tertiary
    title.style.backgroundColor = backgroundTertiary1;
    cardTitle.style.backgroundColor = backgroundTertiary1;
    card.style.backgroundColor = backgroundTertiary2;
    // FONT primary
    body.style.color = textPrimary;
    // FONT tertiary
    title.style.color = textTitle;
    cardTitle.style.color = textTitle;
    

    console.log(`==============================================`)
    console.log(`Primary Background Color: ${backgroundPrimary}`)
    console.log(`Tertiary 1 Background Color: ${backgroundTertiary1}`)
    console.log(`Tertiary 2 Background Color: ${backgroundTertiary2}`)

    console.log(`Primary Font Color: ${textPrimary}`)

}


let buttonImage = document.getElementById('cardImage').addEventListener('click', imagePressed);
let body = document.querySelector('body');
let bodyHeader = document.querySelector('#bodyHeader');
let title = document.getElementById('title');
let mainContainer = document.querySelector('#mainContainer');
let card = document.querySelector('#card');
let cardTitle = document.querySelector('#cardTitle');

function imagePressed() {
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
    // BACKGROUND tertiary 2
    card.style.backgroundColor = backgroundTertiary2;
    // FONT primary
    body.style.color = textPrimary;
    // FONT tertiary
    title.style.color = textTitle;
    cardTitle.style.color = textTitle;
}

function randomizeRGB(colorVariable) {
    // initial color variables
    let red = 1;
    let green = 1;
    let blue = 1;
    // function called in colorVariable below for determining R, G, and B values
    function randomNumber(toBeRandom) {
        toBeRandom = Math.floor(Math.random() * 256);
        return toBeRandom;
    }
    // creating the RGB syntax with random numbers
    colorVariable = `rgb(${randomNumber(red)}, ${randomNumber(green)}, ${randomNumber(blue)})`;
    return colorVariable;
}
    
    // logging values for each color
    console.log(`Primary Background Color: ${backgroundPrimary}`)
    console.log(`Tertiary 1 Background Color: ${backgroundTertiary1}`)
    console.log(`Tertiary 2 Background Color: ${backgroundTertiary2}`)
    console.log(`Primary Font Color: ${textTitle}`)
    console.log(`Primary Font Color: ${textPrimary}`)
    console.log(`==============================================`)

}


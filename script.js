let buttonImage = document.getElementById('cardImage').addEventListener('click', imagePressed);
let body = document.querySelector('body');
let bodyHeader = document.querySelector('#bodyHeader');
let title = document.getElementById('title');
let mainContainer = document.querySelector('#mainContainer');
let card = document.querySelector('#card');
let cardTitle = document.querySelector('#cardTitle');

function imagePressed() {

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
    body.style.backgroundColor = backgroundPrimary;
    title.style.backgroundColor = backgroundPrimary;
    bodyHeader.style.backgroundColor = backgroundTertiary1;

    body.style.color = textPrimary;

}


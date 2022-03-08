let buttonOne = document.getElementById('cup-one-button');
let buttonTwo = document.getElementById('cup-two-button');
let buttonThree = document.getElementById('cup-three-button');

let imageOne = document.getElementById('cup-one-img');
let imageTwo = document.getElementById('cup-two-img');
let imageThree = document.getElementById('cup-three-img');
let cupArray = document.querySelectorAll('.cup-image');

let totalDisplay = document.getElementById('total-guesses');
let correctDisplay = document.getElementById('correct-guesses');
let incorrectDisplay = document.getElementById('incorrect-guesses');

var totalGuesses = 0;
var correctGuesses = 0;

buttonOne.addEventListener('click', () => {
    let correctSpot = getRandomItem(cupArray);
    handleGuess(imageOne, correctSpot);
});

buttonTwo.addEventListener('click', () => {
    let correctSpot = getRandomItem(cupArray);
    handleGuess(imageTwo, correctSpot);
});

buttonThree.addEventListener('click', () => {
    let correctSpot = getRandomItem(cupArray);
    handleGuess(imageThree, correctSpot);
});

function resetStyles() {
    imageOne.src = './assets/base-cup.png';
    imageTwo.src = './assets/base-cup.png';
    imageThree.src = './assets/base-cup.png';
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    for (let cup of cupArray) {
        if (cup !== correctSpot) {
            cup.src = './assets/incorrect-cup.png';
        } else {
            cup.src = './assets/correct-cup.png';
        }
    }
    totalDisplay.textContent = totalGuesses;
    correctDisplay.textContent = correctGuesses;
    incorrectDisplay.textContent = totalGuesses - correctGuesses;
}

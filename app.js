let resetButton = document.getElementById('reset-button');

let cupsDiv = document.querySelector('.cups');

let numCupsInput = document.getElementById('num-cups-input');
let numCupsDiv = document.getElementById('num-cups');

let tryAgainButton = document.getElementById('try-again-button');
let beginGameButton = document.getElementById('begin-game-button');

let buttonsArray = document.querySelectorAll('.cup-button');
let cupsArray = document.querySelectorAll('.cup-image');

let totalDisplay = document.getElementById('total-guesses');
let correctDisplay = document.getElementById('correct-guesses');
let incorrectDisplay = document.getElementById('incorrect-guesses');

var correctSpot;
//initializing it here because I want to reset it every time the user clicks try again
//At one point it stayed under the same cup until you reset the whole game but that didn't seem right
var totalGuesses = 0;
var correctGuesses = 0;

//accepts numTimes: integer, number of cups to create for this game
function createGame(numTimes) {
    let i = 1;
    //each cup is a container div and an image and button inside of it
    //we create numTimes many cups first, then add buttons later
    //if we add buttons inside the loop, it's harder to label them properly
    while (i <= numTimes) {
        createCup();
        i++;
    }
    createButtons();
    beginGameButton.classList.add('hidden');
    numCupsDiv.classList.add('hidden');
    //prevent user from adding more cups while they already exist
}

function createCup() {
    let cupDiv = document.createElement('div');
    cupDiv.classList.add('cup');
    let cupImg = document.createElement('img');
    cupImg.src = './assets/base-cup.png';
    cupImg.classList.add('cup-image');
    cupDiv.appendChild(cupImg);
    cupsDiv.appendChild(cupDiv);
    cupsArray = document.querySelectorAll('.cup-image');
    //have to update this here so that the buttons know the cups exist after you make them
    //otherwise, cupsArray is empty if you only check initially
}

function createButtons() {
    let buttonNumber = 1;
    for (let cup of cupsDiv.children) {
        let buttonDiv = document.createElement('button');
        let cupImg = cup.querySelector('img');
        buttonDiv.classList.add('cup-button');
        buttonDiv.innerText = buttonNumber; 
        buttonDiv.addEventListener('click', () => {

            handleGuess(cupImg, correctSpot);
        });
        buttonNumber++;
        cup.appendChild(buttonDiv);
    }
    buttonsArray = document.querySelectorAll('.cup-button');
}

beginGameButton.addEventListener('click', () => {
    createGame(numCupsInput.value);
});

resetButton.addEventListener('click', () => {
    totalGuesses = 0;
    correctGuesses = 0;
    updateDom();
    resetStyles();
    cupsDiv.textContent = '';
    beginGameButton.classList.remove('hidden');
    numCupsDiv.classList.remove('hidden');
});

tryAgainButton.addEventListener('click', () => {
    resetStyles();
});

function resetStyles() {
    for (let button of buttonsArray) {
        button.disabled = false;
    }
    for (let cup of cupsArray) {
        cup.src = './assets/base-cup.png';
    }
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;
    correctSpot = getRandomItem(cupsArray);
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    for (let cup of cupsArray) {
        if (cup !== correctSpot) {
            cup.src = './assets/incorrect-cup.png';
        } else {
            cup.src = './assets/correct-cup.png';
        }
    }
    for (let button of buttonsArray) {
        button.disabled = true;
    }
    //so many for loops. the price you pay for not knowing how many elements there are
    updateDom();
}

function updateDom() {
    totalDisplay.textContent = totalGuesses;
    correctDisplay.textContent = correctGuesses;
    incorrectDisplay.textContent = totalGuesses - correctGuesses;
}

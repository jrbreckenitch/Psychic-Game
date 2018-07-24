// var guessesLeft = document.getElementById("guessesRemaining");

// var lettersGuessed = document.getElementById("userLetters");

// var wins = document.getElementById("userWins");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var lettersGuessed = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>";

var guesses =
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + lettersGuessed + "</p>";

var guessesReset = 
    "<p>Guesses Left: 9" + "</p>" +
    "<p>Your guesses so far: " + "</p>";

// function updateScore() {
//     document.querySelector("#scoreboard").innerHTML = html;
// }

function updateGuess() {
    document.querySelector("#updateGuess").innerHTML = guesses;
}

// function guessesReset() {
//     document.querySelector("#updateGuess").innerHTML = guessesReset;
// }

var reset = function() {
    guessesLeft = 9;
    lettersGuessed = [];
    updateGuess();
}

console.log(computerChoice);

document.onkeyup = function(event) {

    // Determines which key was pressed.
    // lettersGuessed = event.key.toLowerCase();
    lettersGuessed.textContent = event.key;

        if (lettersGuessed.textContent === computerChoice) {
            wins++;
            console.log("You won!")
            reset(); 
        }

        else if (lettersGuessed.textContent != computerChoice && guessesLeft != 0) {
            guessesLeft--;
            lettersGuessed.push(lettersGuessed.textContent);   
        }

        else if (guessesLeft === 0 && lettersGuessed.textContent != computerChoice) {
            console.log("You lost!")
            losses++;
            reset();   
        }

    document.querySelector("#scoreboard").innerHTML = html;
    document.querySelector("#updateGuess").innerHTML = guesses;

    // var html = 
    //     "<p>Wins: " + wins + "</p>" +
    //     "<p>Losses: " + losses + "</p>";

    // var guesses =
    //     "<p>Guesses Left: " + guessesLeft + "</p>" +
    //     "<p>Your guesses so far: " + lettersGuessed + "</p>";

    // var guessesReset = 
    //     "<p>Guesses Left: 9" + "</p>" +
    //     "<p>Your guesses so far: " + "</p>";

    // document.querySelector("#scoreboard").innerHTML = html;
    // document.querySelector("#updateGuess").innerHTML = guesses;

    // function updateScore() {
    //     document.querySelector("#scoreboard").innerHTML = html;
    // }

    // function updateGuess() {
    //     document.querySelector("#updateGuess").innerHTML = guesses;
    // }

    // function guessesReset() {
    //     document.querySelector("#updateGuess").innerHTML = guessesReset;
    // }

}



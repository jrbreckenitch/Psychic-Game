// var guessesLeft = document.getElementById("guessesRemaining");

// var lettersGuessed = document.getElementById("userLetters");

// var wins = document.getElementById("userWins");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var lettersGuessed = [];

var computerLetter = [];

// var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var reset = function() {
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerLetter.length = 0;
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerLetter.push(computerChoice);
    console.log(computerChoice);
    // updateGuess();
}

window.onload = function() {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerLetter.push(computerChoice);
    console.log(computerLetter[0]);
}

document.onkeyup = function(event) {

    // Determines which key was pressed.
    // lettersGuessed = event.key.toLowerCase();
    // lettersGuessed = event.key;
    var playerChoice = event.key;
    lettersGuessed.push(playerChoice);
    console.log(computerLetter[0]);

        if (playerChoice === computerLetter[0]) {
            console.log("You won!");
            wins++;
            // guessesLeft = 9;
            // lettersGuessed.length = 0;
            // computerLetter.length = 0;
            // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            // computerLetter.push(computerChoice);
            // console.log(computerChoice);
            reset(); 
        }

        else if (playerChoice != computerLetter[0] && guessesLeft != 0) {
            guessesLeft--;
        }

        else if (guessesLeft === 0 && playerChoice != computerLetter[0]) {
            console.log("You lost!");
            losses++;
            // guessesLeft = 9;
            // lettersGuessed.length = 0;
            // computerLetter.length = 0;
            // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            // computerLetter.push(computerChoice);
            // console.log(computerChoice);
            reset();   
        }

    

    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>";

    var guesses =
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    var guessesReset = 
        "<p>Guesses Left: 9" + "</p>" +
        "<p>Your guesses so far: " + "</p>";
    
    document.querySelector("#scoreboard").innerHTML = html;
    document.querySelector("#updateGuess").innerHTML = guesses;

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



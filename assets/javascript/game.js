// var guessesLeft = document.getElementById("guessesRemaining");

// var lettersGuessed = document.getElementById("userLetters");

// var wins = document.getElementById("userWins");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var lettersGuessed = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

document.onkeyup = function(event) {

    // Determines which key was pressed.
    // lettersGuessed = event.key.toLowerCase();
    lettersGuessed.textContent = event.key;

        if (lettersGuessed.textContent === computerChoice) {
            wins++;
            console.log("You won!")
            // document.getElementById("updateGuess").reset();
            // guesses.clear();
            // updateScore();
            // guessesReset();
            ;
            document.querySelector("#userWins").innerHTML = "<p>Wins: " + wins + "</p>";
            document.querySelector("#loss").innerHTML = "<p>Losses: " + losses + "</p>";
            document.querySelector("#guessesRemaining").innerHTML = "<p>Guesses Left: 9" + + guessesLeft + "</p>";
            document.querySelector("#userLetters").innerHTML = "<p>Your guesses so far: " + lettersGuessed + "</p>";            
            
        }

        else if (lettersGuessed.textContent != computerChoice && guessesLeft != 0) {
            guessesLeft--;
            lettersGuessed.push(lettersGuessed.textContent);
            // updateGuess();
            document.querySelector("#guessesRemaining").innerHTML = "<p>Guesses Left: " + 9 + "</p>";
            document.querySelector("#userLetters").innerHTML = "<p>Your guesses so far: " + "</p>";
        }
        else if (guessesLeft === 0 && lettersGuessed.textContent != computerChoice) {
            console.log("You lost!")
            losses++;
            // document.getElementById("updateGuess").reset();
            // guesses.clear();
            // updateScore();
            // guessesReset();
            document.querySelector("#userWins").innerHTML = "<p>Wins: " + wins + "</p>";
            document.querySelector("#loss").innerHTML = "<p>Losses: " + losses + "</p>";
            document.querySelector("#guessesRemaining").innerHTML = "<p>Guesses Left: 9" + + guessesLeft + "</p>";
            document.querySelector("#userLetters").innerHTML = "<p>Your guesses so far: " + lettersGuessed + "</p>";
        }

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



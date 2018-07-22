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

    // for (var i = 9; i >= 0; i--) {
        if (lettersGuessed.textContent === computerChoice) {
            // console.log(wins++)
            wins++;
            console.log("You won!")
        }

        else if (lettersGuessed.textContent != computerChoice && guessesLeft != 0) {
            guessesLeft--;
            lettersGuessed.push(lettersGuessed.textContent);
        }
        else if (guessesLeft === 0 && lettersGuessed.textContent != computerChoice) {
            console.log("You lost!")
        }
    // }


    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#scoreboard").innerHTML = html;
}



    // for (var i = 9; i >= 0; i--) {
    //     if (lettersGuessed === computerChoice) {
    //         wins++;
    //         document.getElementById("userWins").innerHTML += wins;

            // document.getElementById("userWins").innerHTML += ++1;
        //     alert("You Won!");
        // }
        // else if (i <= 0) {
        //     // losses--;
        //     document.getElementById("loss").innerHTML += i;
        //     document.getElementById("userLetters").innerHTML = lettersGuessed;

            //need to write code to end reset game

        // document.getElementById("guessesRemaining");
// }

        // else (lettersGuessed <= computerChoice) {
        //     alert("You lost!")
        // }
    
  



    // Randomly chooses a choice from the options array. This is the Computer's guess.
    // var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    
    // if (userGuess  === computerChoice) {
    //     alert("You won!");
    // }
    // else if(userGuess >= computerChoice) {
    //     guessesLeft--;

    // }

    //   if ((userGuess === "r") && (computerGuess === "s")) {
    //     wins++;
    //   } else if ((userGuess === "r") && (computerGuess === "p")) {
    //     losses++;
    //   } else if ((userGuess === "s") && (computerGuess === "r")) {
    //     losses++;
    //   } else if ((userGuess === "s") && (computerGuess === "p")) {
    //     wins++;
    //   } else if ((userGuess === "p") && (computerGuess === "r")) {
    //     wins++;
    //   } else if ((userGuess === "p") && (computerGuess === "s")) {
    //     losses++;
    //   } else if (userGuess === computerGuess) {
    //     ties++;
    //   }

      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    //   var html =
    //     "<p>You chose: " + userGuess + "</p>" +
    //     "<p>The computer chose: " + computerGuess + "</p>" +
    //     "<p>wins: " + wins + "</p>" +
    //     "<p>losses: " + losses + "</p>" +
    //     "<p>ties: " + ties + "</p>";

      // Set the inner HTML contents of the #game div to our html string
//       document.querySelector("#game").innerHTML = html;
//     }
//   };
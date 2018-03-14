
// set variables
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = lettersArray[Math.floor(Math.random() * lettersArray.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// start listening for events
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add users imput to the guessesSoFar array 
	if (guessesSoFar.indexOf(userGuess) < 0 && lettersArray.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}

	// if user imputs the right letter record a win
	// reset guessesLeft to 9, then reset guessesSoFar to 0
	// Pick a new letter
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = lettersArray[Math.floor(Math.random() * lettersArray.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = lettersArray[Math.floor(Math.random() * lettersArray.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// write results to the index page
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>You have guessed: " + guessesSoFar + "</h4></p>";

	document.querySelector("#game").innerHTML = html;

}
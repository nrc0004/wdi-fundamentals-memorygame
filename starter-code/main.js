console.log("JS file is connected to HTML! Woo!")
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne===cardTwo) {
alert('You found a match!');
} 
else if (cardThree===cardFour) {
alert('You found a match!');
} 
else {
  alert('Sorry, try again.')
} */

var game-board = document.getElementById('game-board');
function createBoard() {
	for (var i=0; i<cards.length; i++){
		var cardElement= docment.createElement('div');
		cardElement.className= 'card';
		board.appendChild(cardElement);
	}
}



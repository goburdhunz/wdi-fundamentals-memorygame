var cards = [
{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
},
{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
},
{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
},
{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
}
];

cardsInPlay = []

function checkMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
  }
  else {
  		alert("Sorry, try again");
  }
  	// reset();
};


function flipCard() {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);	

  if (cardsInPlay.length === 2) {
  	checkMatch();
	}	
};


function createBoard() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


createBoard();


// function reset() {
// 	if (cardsInPlay.length === 2) {
// 		cardsInPlay.pop();
// 		cardsInPlay.pop();
//   }
// };



























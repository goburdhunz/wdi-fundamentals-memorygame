
cards = ["queen", "queen", "king", "king"]

cardsInPlay = []

function checkMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
  }
  else {
  		alert("Sorry, try again");
  }
};


function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
  }
  checkMatch();
};


flipCard(0);
flipCard(2);

function advice(checkMatch) {
	if (checkMatch === false) {
		console.log("Sorry, try again.");
	}

}

advice(false);


























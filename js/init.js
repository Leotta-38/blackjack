// define the function to make original deck
function buildOriginalDeck() {
  const deck = [];
  for (let i = 0; i < numberOfDeck; i++) {
    // Use nested forEach to generate card objects
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          // The 'face' property maps to the library's CSS classes for cards
          face: `${suit}${rank}`,
          // Setting the 'value' property for game of blackjack
          value: Number(rank) || (rank === 'A' ? 'A' : 10)
        });
      });
    });
  }
  return deck;
}


// define the function to make new shuffled deck
function getNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}


// define the function to start or restart the game
const init = () => {

  // Penetration 70%
  if (shuffledDeck.length < originalDeck.length * 0.3) {
    shuffledDeck = getNewShuffledDeck()
    shuffleCardSound()
  }

  updateRemainingCards()
  updateBalance()

  // reset the bet amount
  betAmountElem.textContent = ''
  betBtn.disabled = false

  // reset all the dealed cards
  const cardElemALl = document.querySelectorAll('.card')
  for (let cardElem of cardElemALl) {
    cardElem.remove()
  }

  // reset the hand value
  handValue = {
    player: [0],
    dealer: [0]
  }

  // reset the result message
  resultElem.textContent = ''

  // reset ifBj, ifBusted and ifDouble
  eachStatus = {
    ifBj: false,
    ifBusted: false,
    ifDouble: false
  }
}

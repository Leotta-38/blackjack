// define the function to make cards
const shuffleCards = () => {
  for (let i = 0; i < deck; i++) {
    for (let suit of cardsTemplate.suits) {
      for (let rank of cardsTemplate.ranks) {
        let card = {suit: suit, rank: rank}
        cards.push(card)
      }
    }
  }
  numberOfTotalCards = cards.length
}

// define the function to start or restart the game
const init = () => {

  // Penetration 70%
  if (cards.length < numberOfTotalCards * 0.3) {
    shuffleCards()
  }

  updateRemainingCards()
  updateBalance()

  // reset the bet amount
  betAmountElem.textContent = ''
  betInput.style.display = 'inline'
  betBtn.style.display = 'inline'

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
  for (let handValueElem of handValueElemAll) {
    handValueElem.textContent = ''
  }
}

// call the "init" function when the page is reloaded 
window.onload = () => {
  init();
}

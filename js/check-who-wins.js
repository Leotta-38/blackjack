const checkWhoWins = () => {
  let checkIfPlayerHasA = handValue.player.length
  let checkIfDealerHasA = handValue.dealer.length
  if (handValue.player[checkIfPlayerHasA] < handValue.dealer[checkIfDealerHasA]) {
    playerResultElem.textContent = "Your hand is smaller than the dealer's"
    calculateWinnings('dealer', false, false, false) 
  } else if (handValue.player[checkIfPlayerHasA] > handValue.dealer[checkIfDealerHasA]) {
    playerResultElem.textContent = "Your hand is greater than the dealer's"
    calculateWinnings('player', false, false, false) 
  } else {
    playerResultElem.textContent = "Your hand is equal to the dealer's"
    calculateWinnings('draw', false, false, false) 
  }
}

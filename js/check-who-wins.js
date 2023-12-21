const checkWhoWins = () => {
  let checkIfPlayerHasA = handValue.player.length - 1
  let checkIfDealerHasA = handValue.dealer.length - 1
  console.log(checkIfDealerHasA);
  console.log(checkIfPlayerHasA);
  if (handValue.player[checkIfPlayerHasA] < handValue.dealer[checkIfDealerHasA]) {
    resultElem.textContent = "Your hand is smaller than the dealer's"
    calculateWinnings('dealer', false, false, false) 
  } else if (handValue.player[checkIfPlayerHasA] > handValue.dealer[checkIfDealerHasA]) {
    resultElem.textContent = "Your hand is greater than the dealer's"
    calculateWinnings('player', false, false, false) 
  } else {
    resultElem.textContent = "Your hand is equal to the dealer's"
    calculateWinnings('draw', false, false, false) 
  }
}

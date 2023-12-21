const checkWhoWins = () => {
  if (handValue.player[0] < handValue.dealer[0]) {
    playerResultElem.textContent = "Your hand is smaller than the dealer's"
    calculateWinnings('dealer', false, false, false) 
  } else if (handValue.player[0] > handValue.dealer[0]) {
    playerResultElem.textContent = "Your hand is greater than the dealer's"
    calculateWinnings('player', false, false, false) 
  } else {
    playerResultElem.textContent = "Your hand is equal to the dealer's"
    calculateWinnings('draw', false, false, false) 
  }
}


// const checkIfUnder17 = () => {
//   const checkA = handValue.dealer.length
//   if (checkA === 1) {
//     if (handValue.dealer[0] < 17) {
//       return true
//     } else {
//       return false
//     }
//   } else if (checkA === 2) {
//     if (handValue.dealer[0] < 17 && handValue.dealer[1] < 17) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

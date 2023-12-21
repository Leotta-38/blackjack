// the function to calculate the amount of winnings
const calculateWinnings = (person, bj, surrender, busted) => {
  if (surrender === true) {
    let refund = 0.5 * betAmount
    availableBalance += refund
    winningsElem.textContent = `$${refund.toLocaleString()} has been returned`
  } else if (person === 'player' && bj === true) {
    let winnings = 1.5 * betAmount
    availableBalance += winnings + betAmount
    winningsElem.textContent = `You won $${winnings.toLocaleString()}`
    dealerTalks(false, 'lose')
  } else if (person === 'dealer' && bj === true) {
    winningsElem.textContent = `You lost $${betAmount.toLocaleString()}`
    dealerTalks(false, 'win')
  } else if (person === 'player' && busted === true) {
    winningsElem.textContent = `You lost $${betAmount.toLocaleString()}`
    dealerTalks(false, 'win')
  } else if (person === 'dealer' && busted === true) {
    let winnings = betAmount
    availableBalance += 2 * winnings
    winningsElem.textContent = `You won $${winnings.toLocaleString()}`
    dealerTalks(false, 'lose')
  } else if (person === 'player') {
    let winnings = betAmount
    availableBalance += 2 * winnings
    winningsElem.textContent = `You won $${winnings.toLocaleString()}`
    dealerTalks(false, 'lose')
  } else if (person === 'dealer') {
    winningsElem.textContent = `You lost $${betAmount.toLocaleString()}`
    dealerTalks(false, 'win')
  } else {
    availableBalance += betAmount
    winningsElem.textContent = `$${betAmount.toLocaleString()} has been returned`  
    dealerTalks(false, 'draw')
  }
  setTimeout(init, 2500)
}
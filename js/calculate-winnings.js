// the function to calculate the amount of winnings
const calculateWinnings = (person, bj, surrender, busted) => {
  if (surrender === true) {
    availableBalance += 0.5 * betAmount
    winningsElem.textContent = `You lost $${0.5 * betAmount}`
  } else if (person === 'player' && bj === true) {
    availableBalance += 2.5 * betAmount
    winningsElem.textContent = `You won $${1.5 * betAmount}`
  } else if (person === 'dealer' && bj === true) {
    winningsElem.textContent = `You lost $${betAmount}`
  } else if (person === 'player' && busted === true) {
    winningsElem.textContent = `You lost $${betAmount}`
  } else if (person === 'dealer' && busted === true) {
    availableBalance += 2 * betAmount
    winningsElem.textContent = `You won $${betAmount}`
  } else if (person === 'player') {
    availableBalance += 2 * betAmount
    winningsElem.textContent = `You won $${betAmount}`
  } else if (person === 'dealer') {
    winningsElem.textContent = `You lost $${betAmount}`
  } else {
    winningsElem.textContent = 'Your bet amount has been returned'    
    availableBalance += betAmount
  }
  setTimeout(init, 2500)
}
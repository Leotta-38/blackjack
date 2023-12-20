// the function to calculate the amount of winnings
const calculateWinnings = (person, bj, surrender) => {
  if (surrender === true) {
    availableBalance += 0.5 * betAmount
    init()
  } else if (person === 'player' && bj === true) {
    availableBalance += 2.5 * betAmount
    setTimeout(init, 5000)
  } else if (person === 'player' && bj === false) {
    availableBalance += 2 * betAmount
    setTimeout(init, 5000)
  } else {
    setTimeout(init, 5000)
  }
}
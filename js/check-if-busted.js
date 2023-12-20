// define the function to check if the hand value is over 21
const checkifBusted = person => {
  const personResultsElem = document.querySelector(`.${person} .result`)
  if (handValue[person][0] > 21) {
    personResultsElem.textContent = 'Busted!!!'
    calculateWinnings(person, false, false, true)
  }
}


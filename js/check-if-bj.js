// define the function to check if the hand is blackjack or not
const checkifBJ = (person) => {
  const personResultsElem = document.querySelector(`.${person} .result`)
  if (handValue[person][1] === 21) {
    if(person === 'dealer') {
      const backBlueElem = document.querySelector('#back-blue')
      setTimeout(() => {backBlueElem.removeAttribute('id')}, 1000)
    }
    setTimeout(() => {personResultsElem.textContent = 'BLACKJACK!!!'}, 2000)
    calculateWinnings(person, true, false)
    return true
  } else {
    return false
  }
}

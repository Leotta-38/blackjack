// define the function to check if the hand is blackjack or not
const checkifBJ = async (person) => {
  const personResultsElem = document.querySelector(`.${person} .result`)
  if (handValue[person][1] === 21) {
    ifBj = true
    if(person === 'dealer') {
      await sleep(ms)
      const backBlueElem = document.querySelector('#back-blue')
      backBlueElem.removeAttribute('id')
    }
    await sleep(ms)
    personResultsElem.textContent = 'BLACKJACK!!!'
    calculateWinnings(person, true, false, false)
  }
}

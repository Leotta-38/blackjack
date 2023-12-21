// define the function to check if the hand is blackjack or not
const checkifBJ = async (person) => {
  if (handValue[person][1] === 21) {
    ifBj = true
    if(person === 'dealer') {
      await sleep(dealWaitTime)
      const backBlueElem = document.querySelector('#back-blue')
      backBlueElem.removeAttribute('id')
    }
    await sleep(resultWaitTime)
    resultElem.textContent = `${person} BLACKJACK!!!`
    calculateWinnings(person, true, false, false)
  }
}

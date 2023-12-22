// define the function to check if the hand is blackjack or not
const checkifBJ = async (person) => {
  if (handValue[person][1] === 21) {
    eachStatus.ifBj = true
    if(person === 'dealer') {
      await sleep(dealWaitTime)
      const backBlueElem = document.querySelector('#back-blue')
      backBlueElem.removeAttribute('id')
    } else if (person === 'player') {
      applauseSound()
    }
    await sleep(resultWaitTime)
    let modPerson = person[0].toUpperCase() + person.slice(1)
    resultElem.textContent = `${modPerson} BLACKJACK!!!`
    calculateWinnings(person, true, false, false)
  }
}

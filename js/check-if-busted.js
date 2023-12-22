// define the function to check if the hand value is over 21
const checkifBusted = person => {
  if (handValue[person][0] > 21) {
    let modPerson = person[0].toUpperCase() + person.slice(1) 
    resultElem.textContent = `${modPerson} Busted!!!`
    calculateWinnings(person, false, false, true)
  } else if (person === 'player' && eachStatus.ifDouble === false) {
    eachStatus.ifBusted = false
    standBtn.disabled = false
    hitBtn.disabled = false
  } else {
    eachStatus.ifBusted = false
  }
}


// define the function to check if the hand value is over 21
const checkifBusted = person => {
  if (handValue[person][0] > 21) { 
    resultElem.textContent = `${person} Busted!!!`
    calculateWinnings(person, false, false, true)
  } else {
    ifBusted = false
  }
}


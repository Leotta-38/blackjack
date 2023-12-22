// the function to show the current available to bet balance
const dealCard = (person, count, double) => {

  // call the function to make a deal-card-sound
  dealCardSound()

  // pick up the first card from shuffled deck and delete it from the deck
  let dealedCard = shuffledDeck[0]
  shuffledDeck.shift()
  updateRemainingCards()

  // create new div for each card and show it on the screen
  const elem = document.createElement('div')
  elem.className = `card ${dealedCard.face}`
  if (person === 'dealer' && count === 2) {
    elem.setAttribute('id', 'back-blue')
  } else if (double === true) {
    elem.classList.add('west')
  }
  const personCardsElem = document.querySelector(`.${person} .card-container`)
  personCardsElem.appendChild(elem)

  // calculate the hand value
  let lengthOfhandValue = handValue[person].length
  if (dealedCard.value === "A") {
    handValue[person][1] = handValue[person][0]
    handValue[person][0] += 1
    handValue[person][1] += 11
  } else {
    for (let i = 0; i < lengthOfhandValue; i++) {
      handValue[person][i] += dealedCard.value
    }
  }

  if (handValue[person][1] > 21) {
    handValue[person].pop()
  }

}
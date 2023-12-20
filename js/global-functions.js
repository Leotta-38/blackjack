// the function to show the current number of remaining cards
const updateRemainingCards = () => {
  remainingCardsElem.textContent = shuffledDeck.length
}


// the function to show the current available to bet balance
const updateBalance = () => {
  availableBalanceElem.textContent = `your 'available to bet' balance is: $${availableBalance}`
}


// the function to show the current available to bet balance
const dealCard = (person, count) => {

  // pick up the first card from shuffled deck and delete it from the deck
  let dealedCard = shuffledDeck[0]
  shuffledDeck.shift()

  // create new div for each card and show it on the screen
  const elem = document.createElement('div')
  elem.className = `card ${dealedCard.face}`
  if (person === 'dealer' && count === 2) {
    elem.setAttribute('id', 'back-blue')
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

  updateRemainingCards()
}



// const checkifBusted = (person) => {
//   const personResultsElem = document.querySelector(`.${person} .result`)
//   if (handValue[person][0] === 21 || handValue[person][1] === 21) {
//     if (count === 2) {
//       personResultsElem.textContent = 'BLACKJACK!!!'
//       availableBalance += 2.5 * betAmount
//     } else {
//       personResultsElem.textContent = 'Win!!!'
//       availableBalance += 2 * betAmount
//     }
//     updateBalance()
//     console.log('congrats!');
//   } else if (handValue[person][0] > 21) {
//     personResultsElem.textContent = 'Busted!!!'
//     console.log('bust!');
//   }
// }


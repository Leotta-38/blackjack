// the function to show the current number of remaining cards
const updateRemainingCards = () => {
  remainingCardsElem.textContent = cards.length
}


// the function to show the current available to bet balance
const updateBalance = () => {
  availableBalanceElem.textContent = `your 'available to bet' balance is: $${availableBalance}`
}


// the function to show the current available to bet balance
const dealCard = person => {

  // pick up a card randomly and delete it from the datalist
  let randomNumber = Math.floor(Math.random() * cards.length)
  let dealedCard = cards[randomNumber]
  cards.splice(randomNumber, 1)

  // create new div for each card and show it on the screen
  const elem = document.createElement('div')
  elem.className = 'card'
  elem.textContent = `${dealedCard.suit} ${dealedCard.rank}`
  
  const personCardsElem = document.querySelector(`.${person} .cards`)
  personCardsElem.appendChild(elem)

  // calcurate the hand value
  let lengthOfhandValue = handValue[person].length
  if (dealedCard.rank === "A") {
    handValue[person][1] = handValue[person][0]
    handValue[person][0] += 1
    handValue[person][1] += 11
  } else if (faceCards.includes(dealedCard.rank)) {
    for (let i = 0; i < lengthOfhandValue; i++) {
      handValue[person][i] += 10
    }
  } else {
    for (let i = 0; i < lengthOfhandValue; i++) {
      handValue[person][i] += dealedCard.rank
    }
  }

  if (handValue[person][1] > 21) {
    handValue[person].pop()
  }
  
  // show the hand value on the screen
  const personHandValueElem = document.querySelector(`.${person} .hand-value`)
  personHandValueElem.textContent = handValue[person]

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



const checkifBJ = (person) => {
  const personResultsElem = document.querySelector(`.${person} .result`)
  if (handValue[person][1] === 21) {
    personResultsElem.textContent = 'BLACKJACK!!!'
  }
}
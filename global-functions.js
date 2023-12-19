
const makeCards = () => {
  for (let i = 0; i < cardsSet; i++) {
    for (let suit of cardsTemplate.suits) {
      for (let rank of cardsTemplate.ranks) {
        let card = {suit: suit, rank: rank}
        cards.push(card)
      }
    }
  }
}

const updateRemainingCards = () => {
  remainingCardsElem.textContent = cards.length
}

const updateBalance = () => {
  availableBalanceElem.textContent = `your 'available to bet' balance is: $${availableBalance}`
}

const checkif21andBusted = (person) => {
  const personResultsElem = document.querySelector(`.${person} .result`)
  if (dealedCardsTotal[person][0] === 21 || dealedCardsTotal[person][1] === 21) {
    if (count === 2) {
      personResultsElem.textContent = 'BLACKJACK!!!'
      availableBalance += 2.5 * betAmount
    } else {
      personResultsElem.textContent = 'Win!!!'
      availableBalance += 2 * betAmount
    }
    updateBalance()
    console.log('congrats!');
  } else if (dealedCardsTotal[person][0] > 21) {
    personResultsElem.textContent = 'Busted!!!'
    console.log('bust!');
  }
}


const dealCard = person => {
  let randomNumber = Math.floor(Math.random() * cards.length)
  let dealedCard = cards[randomNumber]
  cards.splice(randomNumber, 1)

  let lengthOfDealedCardsTotal = dealedCardsTotal[person].length
  if (dealedCard.rank === "A") {
    dealedCardsTotal[person][1] = dealedCardsTotal[person][0]
    dealedCardsTotal[person][0] += 1
    dealedCardsTotal[person][1] += 11
  } else if (faceCards.includes(dealedCard.rank)) {
    for (let i = 0; i < lengthOfDealedCardsTotal; i++) {
      dealedCardsTotal[person][i] += 10
    }
  } else {
    for (let i = 0; i < lengthOfDealedCardsTotal; i++) {
      dealedCardsTotal[person][i] += dealedCard.rank
    }
  }

  if (dealedCardsTotal[person][1] > 21) {
    dealedCardsTotal[person].pop()
  }
  
  const personTotalElem = document.querySelector(`.${person} .total`)
  personTotalElem.textContent = dealedCardsTotal[person]

  const elem = document.createElement('div')
  elem.className = 'card'
  elem.textContent = `${dealedCard.suit} ${dealedCard.rank}`
  
  const personCardsElem = document.querySelector(`.${person} .cards`)
  personCardsElem.appendChild(elem)

  updateRemainingCards()

  count++
}



const init = () => {
  makeCards()
  updateRemainingCards()
  updateBalance()
}

//execute the "init" function when the page is reloaded 
window.onload = () => {
  init();
}


// template to make the cards
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// the number of deck
const numberOfDeck = 6

// datalist to store the cards
let originalDeck = []
let shuffledDeck = []

// datalist to store player and dealer
let people = ['player', 'dealer']

// datalist to store the player's or dealer's hand value
let handValue = {
  player: [0],
  dealer: [0]
}

// the current available to bet balance
let availableBalance

// the bet amount
let betAmount = 0

// boolean of blackjack status
let ifBj = false

// boolean of busted status
let ifBusted = false

// boolean of double status
let ifDouble = false


// caching dom element references

// elem
const startingScreenElem = document.querySelector('.starting-screen')
const houseRuleElem = document.querySelector('.house-rules')
const disappearElemAll = document.querySelectorAll('.disappear')
const gameElem = document.querySelector('.game')
const remainingCardsElem = document.querySelector('.remaining-cards')
const dealerCommentElem = document.querySelector('.dealer-comment')
const betAmountElem = document.querySelector('.bet-amount')
const availableBalanceElem = document.querySelector('.available-balance')
const resultElem = document.querySelector('.result')
const winningsElem = document.querySelector('.winnings')

// input
const allInputs = document.querySelectorAll('input')
const amountMoneyInput = document.querySelector('.amount-money-input')
const betInput = document.querySelector('.bet-input')

// button
const StartBtn = document.querySelector('.start-btn')
const betBtn = document.querySelector('.bet-btn')
const standBtn = document.querySelector('.stand-btn')
const hitBtn = document.querySelector('.hit-btn')
const doubleDownBtn = document.querySelector('.double-down-btn')
const splitBtn = document.querySelector('.split-btn')
const surrenderBtn = document.querySelector('.surrender-btn')

// sound
const soundDealCardElem = document.querySelector('.sound_deal_card')
const soundShuffleCardElem = document.querySelector('.sound_shuffle_card')


// the function to show the current number of remaining cards
const updateRemainingCards = () => {
  remainingCardsElem.textContent = shuffledDeck.length
}


// the function to show the current available to bet balance
const updateBalance = () => {
  availableBalanceElem.textContent = availableBalance.toLocaleString()
}


// sleep function (get from internet)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const dealWaitTime = 1000
const resultWaitTime = 2000


// the function to add thousands separators
const regex = /,/g
function handleInput(event) {
  if (Number(event.target.value.replaceAll(regex, ''))) {
    let stringToNum = Number(event.target.value.replaceAll(regex, ''))
    event.target.value = stringToNum;
    let numToString = Number(event.target.value).toLocaleString()
    event.target.value = numToString;
  } else {
    event.target.value = ''
  }
}


// call the "handleInput" function when the player input any value to the inputs
for (let inputElem of allInputs) {
  inputElem.addEventListener('input', handleInput)
}


const checkBalance = () => {
  if (betAmount > availableBalance) {
    doubleDownBtn.disabled = true
  }
}
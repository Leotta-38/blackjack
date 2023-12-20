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



// caching dom element references

// to show something
const startingScreenElem = document.querySelector('.starting-screen')
const houseRuleElem = document.querySelector('.house-rule')
const gameElem = document.querySelector('.game')
const remainingCardsElem = document.querySelector('.remaining-cards')
const betAmountElem = document.querySelector('.bet-amount')
const availableBalanceElem = document.querySelector('.available-balance')
const resultElemAll = document.querySelectorAll('.result')
const winningsElem = document.querySelector('.winnings')

// input
const betInput = document.querySelector('.bet-input')
const amountMoneyInput = document.querySelector('.amount-money-input')

// button
const StartBtn = document.querySelector('.start-btn')
const betBtn = document.querySelector('.bet-btn')
const standBtn = document.querySelector('.stand-btn')
const hitBtn = document.querySelector('.hit-btn')
const doubleDownBtn = document.querySelector('.double-down-btn')
const splitBtn = document.querySelector('.split-btn')
const surrenderBtn = document.querySelector('.surrender-btn')




// the function to show the current number of remaining cards
const updateRemainingCards = () => {
  remainingCardsElem.textContent = shuffledDeck.length
}


// the function to show the current available to bet balance
const updateBalance = () => {
  availableBalanceElem.textContent = `your 'available to bet' balance is: $${availableBalance}`
}


// sleep function (get from internet)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

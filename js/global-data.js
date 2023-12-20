// time length for fade-in / fade-out
const fadeTime =  1000

// template to make the cards
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// the number of deck
const numberOfDeck = 6

// datalist to store the cards
let originalDeck = []
let shuffledDeck = []

// datalist to store the player's or dealer's hand value
let handValue = {
  player: [0],
  dealer: [0]
}

// the current available to bet balance
let availableBalance

// the bet amount
let betAmount = 0

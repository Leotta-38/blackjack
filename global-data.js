// template to make the actual cards
const cardsTemplate = {
  suits: ["spade", "heart", "diamond", "club"],
  ranks: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
}

// datalist of facecards
const faceCards = ["J", "Q", "K"]

// the number of deck
const deck = 6

// datalist to store the remaining cards
let cards = []

// the number of total cards
let numberOfTotalCards = 1

// datalist to store the player's or dealer's hand value
let handValue = {
  player: [0],
  dealer: [0]
}

// the current available to bet balance
let availableBalance = 100

// the bet amount
let betAmount = 0

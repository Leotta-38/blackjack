const cardsTemplate = {
  suits: ["spade", "heart", "diamond", "club"],
  ranks: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
}

const faceCards = ["J", "Q", "K"]

const cardsSet = 3
let cards = []

let dealedCardsTotal = {
  player: [0],
  dealer: [0]
}

let availableBalance = 100
let betAmount = 0

let count = 0
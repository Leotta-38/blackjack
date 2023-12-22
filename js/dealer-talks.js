// list of the dealer's comments
const dealerComments = {
  greeting: ['Welcome!'],
  win: ['I win!', 'YEAH!!', 'You lose', 'Bad luck', 'Try again!', 'Better luck next time'],
  lose: ['You win!', 'Oh my god!', 'Oh no!!!', 'Congrats!', 'Oh...', "You're good at this", 'Oh shoot!'],
  draw: ["Let's try again", "Hmmm..."]
}

// define the function for the dealer say something depending on the situation
const dealerTalks = async (when) => {
    await sleep(dealWaitTime)
    let randomNum = 0
    if (when === 'greeting') {
      randomNum = Math.floor(Math.random() * dealerComments[when].length)
    } else {
      randomNum = Math.floor(Math.random() * dealerComments[when].length * 2)
    }
    dealerCommentElem.textContent = dealerComments[when][randomNum]
}
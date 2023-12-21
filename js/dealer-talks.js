const dealerComment = {
  win: ['I win!', 'YEAH!!', 'You lose', 'Bad luck', 'Try again!', 'Better luck next time'],
  lose: ['You win!', 'Oh my god!', 'Oh no!!!', 'Congrats!', 'Oh...', "You're good at this", 'Oh shoot!'],
  draw: ["Let's try again", "Hmmm..."]
}

const dealerTalks = async (start, result) => {
  if (start === true) {
    await sleep(dealWaitTime)
    dealerCommentElem.textContent = 'Welcome!'
  } else {
    let randomNum = Math.floor(Math.random() * dealerComment[result].length * 2)
    dealerCommentElem.textContent = dealerComment[result][randomNum]
  }
}
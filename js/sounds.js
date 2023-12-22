// define the function to make a sound when cards are dealed
const dealCardSound = () => {
  soundDealCardElem.currentTime = 0
  soundDealCardElem.play()
}

// define the function to make a sound when cards are shuffled
const shuffleCardSound = () => {
  soundShuffleCardElem.currentTime = 0
  soundShuffleCardElem.play()
}

// define the function to make a sound when player gets a blackjack
const applauseSound = () => {
  soundApplauseElem.currentTime = 0
  soundApplauseElem.play()
} 

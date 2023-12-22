const checkIfUnder17 = () => {
  const checkA = handValue.dealer.length
  if (checkA === 1) {
    if (handValue.dealer[0] < 17) {
      return true
    } else {
      return false
    }
  } else if (checkA === 2) {
    if (handValue.dealer[0] < 17 && handValue.dealer[1] < 17) {
      return true
    } else {
      return false
    }
  }
}


const stand = async () => {
  const backBlueElem = document.querySelector('#back-blue')
  backBlueElem.removeAttribute('id')
  while (checkIfUnder17()) {
    eachStatus.ifBusted = true
    await sleep(dealWaitTime)
    dealCard('dealer')
    // await sleep(resultWaitTime)
    checkifBusted('dealer')
  }
  await sleep(resultWaitTime)
  if (!eachStatus.ifBusted) {
    checkWhoWins()
  }
}

// define the function which is called when the player click the "stand" button
const handleClickStandBtn = () => {
  stand()
  initButtons()
}

// call the "handleClickStandBtn" function when the player click the "stand" button
standBtn.addEventListener('click', handleClickStandBtn)
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
    ifBusted = true
    await sleep(1000)
    dealCard('dealer')
    checkifBusted('dealer')
  }
  await sleep(1000)
  if (!ifBusted) {
    console.log('test');
    checkWhoWins()
  }
}

// define the function which is called when the player click the "stand" button
const handleClickStandBtn = () => {
  stand()
}

// call the "handleClickStandBtn" function when the player click the "stand" button
standBtn.addEventListener('click', handleClickStandBtn)
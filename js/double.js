const double = async () => {
  availableBalance -= betAmount
  betAmount += betAmount
  betAmountElem.textContent = betAmount.toLocaleString()
  updateBalance()
  
  await sleep(dealWaitTime)
  eachStatus.ifBusted = true
  dealCard('player', 0, true)
  await sleep(dealWaitTime)
  eachStatus.ifDouble = true
  checkifBusted('player')
  if (!eachStatus.ifBusted) {
    stand()
  }
}

// define the function which is called when the player click the "double down" button
const handleClickDoubleDownBtn = () => {
  double()
  initButtons()
}

// call the "handleClickDoubleDownBtn" function when the player click the "double down" button
doubleDownBtn.addEventListener('click', handleClickDoubleDownBtn)
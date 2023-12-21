const double = async () => {
  availableBalance -= betAmount
  betAmount += betAmount
  betAmountElem.textContent = betAmount.toLocaleString()
  updateBalance()
  
  await sleep(dealWaitTime)
  ifBusted = true
  dealCard('player', 0, true)
  await sleep(dealWaitTime)
  ifDouble = true
  checkifBusted('player')
  if (!ifBusted) {
    stand()
  }
}

// define the function which is called when the player click the "double down" button
const handleClickDoubleDownBtn = () => {
  double()
  standBtn.disabled = true
  hitBtn.disabled = true
  doubleDownBtn.disabled = true
  surrenderBtn.disabled = true
}

// call the "handleClickDoubleDownBtn" function when the player click the "double down" button
doubleDownBtn.addEventListener('click', handleClickDoubleDownBtn)
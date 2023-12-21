const double = async () => {
  availableBalance -= betAmount
  betAmount += betAmount
  betAmountElem.textContent = `your bet amount is: $${betAmount}`
  updateBalance()

  await sleep(ms)
  ifBusted = true
  dealCard('player')
  await sleep(ms)
  checkifBusted('player')
  if (!ifBusted) {
    stand()
  }
}

// define the function which is called when the player click the "double down" button
const handleClickDoubleDownBtn = () => {
  double()
}

// call the "handleClickDoubleDownBtn" function when the player click the "double down" button
doubleDownBtn.addEventListener('click', handleClickDoubleDownBtn)
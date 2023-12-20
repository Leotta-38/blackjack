// define the function to get input value and show it on the screen
const betMoney = () => {
  betAmount = Number(betInput.value)
  if (Math.floor(betAmount) === betAmount && betAmount <= availableBalance && betAmount > 0) {
    betAmountElem.textContent = `your bet amount is: $${betAmount}`
    
    availableBalance -= betAmount
    updateBalance()

    betInput.style.display = 'none'
    betBtn.style.display = 'none'
  }
}

// define the function which is called when the player click the "bet" button
const handleClickBetBtn = () =>  {
  betMoney()
  dealCard('player')
  dealCard('player')
  dealCard('dealer')
  dealCard('dealer')
  checkifBJ('player')
  checkifBJ('dealer')
}

// call the "handleClickBetBtn" function when the player click the "bet" button
betBtn.addEventListener('click', handleClickBetBtn)
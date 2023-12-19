const betMoney = () => {
  betAmount = Number(betInput.value)
  if (Math.floor(betAmount) === betAmount && betAmount <= availableBalance && betAmount > 0) {
    availableBalance -= betAmount
    updateBalance()
    betAmountElem.textContent = `your bet amount is: $${betAmount}`

    betInput.style.display = 'none'
    betBtn.style.display = 'none'

    dealCard('player')
    dealCard('player')
    dealCard('dealer')
    dealCard('dealer')
    checkif21andBusted('player')
  }
}

betBtn.addEventListener('click', betMoney)
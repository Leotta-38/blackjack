// define the function to get input value and show it on the screen
const betMoney = () => {
  betAmount = Number(betInput.value)
  if (Math.floor(betAmount) === betAmount && betAmount <= availableBalance && betAmount > 0) {
    betAmountElem.textContent = `your bet amount is: $${betAmount}`
    
    availableBalance -= betAmount
    updateBalance()

    betInput.style.display = 'none'
    betBtn.style.display = 'none'
    return true
  }
}

// define the function which is called when the player click the "bet" button
const handleClickBetBtn = async () =>  {
  if (betMoney()) {
    winningsElem.textContent = ''
    for (let person of people) {
      for (let i = 1; i < 3; i++) {
        await sleep(1000)
        dealCard(person, i)
      }
    }
    checkifBJ('player')
    if (!ifBj) {
      checkifBJ('dealer')
      if (!ifBj) {
        standBtn.disabled = false
        hitBtn.disabled = false
        doubleDownBtn.disabled = false
        surrenderBtn.disabled = false
      }
    } 
  }
}

// call the "handleClickBetBtn" function when the player click the "bet" button
betBtn.addEventListener('click', handleClickBetBtn)
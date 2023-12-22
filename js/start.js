// define the function which is called when the player click the "start" button
const handleClickStartBtn = () =>  {
  availableBalance = Number(amountMoneyInput.value.replaceAll(regex, ''))
  if (availableBalance > 0) {
    originalDeck = buildOriginalDeck()
    init();
    startingScreenElem.style.display = 'none'
    for (let disappearElem of disappearElemAll) {
      disappearElem.style.display = 'none'
    }
    gameElem.style.display = 'block'
    houseRuleElem.classList.add('during-game')
    dealerTalks('greeting')
  }
}


// call the "handleClickStartBtn" function when the player click the "start" button
StartBtn.addEventListener('click', handleClickStartBtn)

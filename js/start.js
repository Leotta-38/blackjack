// define the function which is called when the player click the "start" button
const handleClickStartBtn = () =>  {
  availableBalance = Number(amountMoneyInput.value)
  if (availableBalance > 0) {
    originalDeck = buildOriginalDeck()
    init();
    startingScreenElem.style.display = 'none'
    gameElem.style.display = 'block'
  }
}


// call the "handleClickStartBtn" function when the player click the "start" button
StartBtn.addEventListener('click', handleClickStartBtn)


// call the functions when the page is reloaded 
window.onload = () => {
  gameElem.style.display = 'none'
}

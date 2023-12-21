// defince the function for "surrender"
const surrender = () => {
  calculateWinnings('player', false, true, false)
}

// define the function which is called when the player click the "surrender" button
const handleClickSurrenderBtn = () => {
  surrender()
  standBtn.disabled = true
  hitBtn.disabled = true
  doubleDownBtn.disabled = true
  surrenderBtn.disabled = true
}

// call the "handleClickSurrenderBtn" function when the player click the "surrender" button
surrenderBtn.addEventListener('click', handleClickSurrenderBtn)
// defince the function for "surrender"
const surrender = () => {
  calculateWinnings('player', false, true)
}

// define the function which is called when the player click the "surrender" button
const handleClickSurrenderBtn = () => {
  surrender()
}

// call the "handleClickSurrenderBtn" function when the player click the "surrender" button
surrenderBtn.addEventListener('click', handleClickSurrenderBtn)
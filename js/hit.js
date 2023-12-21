const hit = async () => {
  dealCard('player')
  await sleep(1000)
  checkifBusted('player')
}

// define the function which is called when the player click the "hit" button
const handleClickHitBtn = () => {
  hit()
  doubleDownBtn.disabled = true
  surrenderBtn.disabled = true
}

// call the "handleClickHitBtn" function when the player click the "hit" button
hitBtn.addEventListener('click', handleClickHitBtn)
const hit = async () => {
  dealCard('player')
  await sleep(dealWaitTime)
  checkifBusted('player')
}

// define the function which is called when the player click the "hit" button
const handleClickHitBtn = () => {
  hit()
  initButtons()
}

// call the "handleClickHitBtn" function when the player click the "hit" button
hitBtn.addEventListener('click', handleClickHitBtn)
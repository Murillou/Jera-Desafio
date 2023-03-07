const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

function countdownMinute(){
  let minutes = 23
  minute.textContent = '24'
  const minuteInterval = setInterval( () => {
  minute.textContent = minutes < 10 ? '0' + minutes : minutes
  minutes--
  if(minutes < 0){
    clearInterval(minuteInterval)
  }

  }, 60000)
 
}

function countdownSecond(){
  let seconds = 58
  second.textContent = '59'
  const secondInterval = setInterval( () => {
    second.textContent = seconds < 10 ? '0' + seconds : seconds
    seconds--
    if(seconds < 0){
      seconds = 59
    }
  }, 1000)
}


countdownMinute()
countdownSecond()
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

  }, 100)
 
}

function countdownSecond(){
  let seconds = 58
  second.textContent = '59'
  const secondInterval = setInterval( () => {
    
    second.textContent = seconds < 10 ? '0' + seconds : seconds
    seconds--
    if(seconds < 0){
      seconds = 59
      if(minute.textContent === '00'){
        const sound = new Audio('pink_panther.ogg')
        clearInterval(secondInterval)
        sound.play()
      } 
    }
  }, 100)
}


countdownMinute()
countdownSecond()

const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

pomodoroInit()

function pomodoroInit(){
  minute.textContent = '25'
  second.textContent = '00'
}

const timer = document.getElementById('min25')
let quantidadePomodoro = 0

timer.addEventListener('click', function(){
  function countdownMinute(){
    let minutes = 23
    minute.textContent = '24'
    const minuteInterval = setInterval( () => {
    minute.textContent = minutes < 10 ? '0' + minutes : minutes
    minutes--
    if(minutes < 0){
      clearInterval(minuteInterval)
      
    }
  
    }, 10)
   
  }

  const mensagem = document.getElementById('mensagem')
  
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
          quantidadePomodoro += 1
          if(quantidadePomodoro == 4){
            mensagem.innerText = 'Você já utilizou o Pomodoro 4 vezes, recomendamos uma pausa de 10 minutos!!'
          }
         
        } 
      }
    }, 10)
  }
  
  
  
  countdownMinute()
  countdownSecond()
})



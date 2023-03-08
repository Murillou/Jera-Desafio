const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const mensagem = document.querySelector('#mensagem')
const pomodoro = document.querySelector('#min25')
const intervalo = document.querySelector('#intervalo')
const audio = new Audio("Mídia/intervalEnd.mp3")
const sound = new Audio('Mídia/Bells.mp3')
let quantidadePomodoro = 0

pomodoroInit()

pomodoro.addEventListener('click', function(){
  mensagem.innerHTML = ''
  audio.pause()
  sound.pause()

  function countdownMinute(){    // contagem de minutos
    let minutes = 23
    minute.textContent = '24'
    const minuteInterval = setInterval( () => {
    minute.textContent = minutes < 10 ? '0' + minutes : minutes
    minutes--
      if(minutes < 0){
        clearInterval(minuteInterval)
     } 
    }, 60001)
  }
  
  function countdownSecond(){   // contagem de segundos
    let seconds = 58
    second.textContent = '59'
    const secondInterval = setInterval( () => {
      second.textContent = seconds < 10 ? '0' + seconds : seconds
      seconds--
      if(seconds < 0){
        seconds = 59
        if(minute.textContent === '00'){
          clearInterval(secondInterval)
          sound.currentTime = 0
          sound.play()
          quantidadePomodoro += 1
          console.log(quantidadePomodoro)
          if(quantidadePomodoro == 4){
            mensagem.innerHTML = '<strong style="color:#ff0446;">ATENÇÃO:</strong> Você já utilizou o Pomodoro 4 vezes, recomendamos uma pausa de 10 minutos!!'
          }
        } 
      }
    }, 1000)
  }
  
  sound.addEventListener('ended', function() {   // repetição do som ao chegar ao fim dele
    sound.currentTime = 0 
    sound.play()
  })
  
  countdownMinute()
  countdownSecond()
  
})

function pomodoroInit(){
  minute.textContent = '25'
  second.textContent = '00'
}

intervalo.addEventListener('click', () => {
  audio.pause()
  sound.pause()
    function minutesInterval(){
      let minutes = 3
      minute.textContent = '04'
      const stopInterval = setInterval(() => {
        minute.textContent = minutes < 10 ? '0' + minutes : minutes
        minutes--
        if(minute.textContent === '0'){
          clearInterval(stopInterval)
        }
      }, 60001)
    }

    function secondsInterval(){
      let seconds = 58
      second.textContent = '59'
      const stopSecond = setInterval(() => {
        second.textContent = seconds < 10 ? '0' + seconds : seconds
        seconds--
        if(seconds < 0){
          seconds = 59
          if(minute.textContent == '0'){
            clearInterval(stopSecond)
            audio.play()
          }
        }
      }, 1000)
    }

    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
    })

    minutesInterval()
    secondsInterval()
})


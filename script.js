const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const mensagem = document.querySelector('#mensagem')
const pomodoro = document.querySelector('#min25')
const intervalo = document.querySelector('#intervalo')
const audio = new Audio("Mídia/intervalEnd.mp3")
const sound = new Audio('Mídia/Bells.mp3')
let quantidadePomodoro = 0
let minuteInterval
let secondInterval
let stopInterval
let stopSecond

pomodoroInit()

function pomodoroInit(){
  minute.textContent = '25'
  second.textContent = '00'
}

function countdownMinute(){    // contagem de minutos
  let minutes = 23
  minute.textContent = '24'
  minuteInterval = setInterval( () => {
  minute.textContent = minutes < 10 ? '0' + minutes : minutes
  minutes--
    if(minutes < 0){
      clearInterval(minuteInterval)
   } 
  }, 100)
}

function countdownSecond(){   // contagem de segundos
  let seconds = 58
  second.textContent = '59'
  secondInterval = setInterval( () => {
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
  }, 100)
}


function minutesInterval(){
  let minutes = 3
  minute.textContent = '04'
   stopInterval = setInterval(() => {
    minute.textContent = minutes < 10 ? '0' + minutes : minutes
    minutes--
    if(minute.textContent === '00'){
      clearInterval(stopInterval)
    }
  }, 100)
}


function secondsInterval(){
  let seconds = 58
  second.textContent = '59'
  stopSecond = setInterval(() => {
    second.textContent = seconds < 10 ? '0' + seconds : seconds
    seconds--
    if(seconds < 0){
      seconds = 59
      if(minute.textContent == '00'){
        clearInterval(stopSecond)
        audio.play()
      }
    }
  }, 100)
}

sound.addEventListener('ended', function() {   // repetição do som ao chegar ao fim dele
  sound.currentTime = 0 
  sound.play()
})

audio.addEventListener('ended', () => {
  audio.currentTime = 0
  audio.play()
})

function limparPomodoro(){
  clearInterval(minuteInterval)
  clearInterval(secondInterval)
}

function limparIntervalo(){
  clearInterval(stopInterval)
  clearInterval(stopSecond)
}

pomodoro.addEventListener('click', function(){
  mensagem.innerHTML = ''
  audio.pause()
  sound.pause() 

  limparIntervalo()
  limparPomodoro()

  countdownMinute()
  countdownSecond()
})



intervalo.addEventListener('click', () => {
  audio.pause()
  sound.pause()

  limparIntervalo()
  limparPomodoro()

  minutesInterval()
  secondsInterval()
})


const reset = document.querySelector('#reset')

reset.addEventListener('click', () => {
  audio.pause()
  sound.pause()
  limparIntervalo()
  limparPomodoro()
  pomodoroInit()
})



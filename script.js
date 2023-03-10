timerInicial()

timer25Min.addEventListener('click', function(){
  quantidadeInterval = 0
  mensagem.innerHTML = ''

  somDoIntervalo.pause()
  somDoTimer25Min.pause() 
  finalizarTimerEscolhido()
  finalizarTimerIntervalo()
  finalizarTimer25Min()
  minutesTimer25Min()
  secondsTimer25Min()
})

intervalo.addEventListener('click', () => {
  mensagem.innerText = ''
  quantidadeTimer = 0

  somDoIntervalo.pause()
  somDoTimer25Min.pause()
  finalizarTimerEscolhido()
  finalizarTimerIntervalo()
  finalizarTimer25Min()
  minutesInterval()
  secondsInterval()
})

reset.addEventListener('click', () => {
  mensagem.innerText = ''
  contagemTimerTotal = 0
  quantidadeTimer = 0
  quantidadeInterval = 0

  somDoIntervalo.pause()
  somDoTimer25Min.pause()
  finalizarTimerIntervalo()
  finalizarTimer25Min()
  timerInicial()
})

contagemPomodoro.addEventListener('click', () => {
  somDoIntervalo.pause()
  somDoTimer25Min.pause()
  mensagemContagemTimer()
})

escolherMinutesTimer.addEventListener('click', () => {
  somDoIntervalo.pause()
  somDoTimer25Min.pause()
  finalizarTimerEscolhido()
  finalizarTimerIntervalo()
  finalizarTimer25Min()
  timerEscolhido()
})

function timerInicial(){
  minute.textContent = '25'
  second.textContent = '00'
}

function minutesTimer25Min(){    
  let minutes = 23
  minute.textContent = '24'

  minuteSetIntervalTimer = setInterval( () => {
  minute.textContent = minutes < 10 ? '0' + minutes : minutes
  minutes--
    if(minutes < 0){
      clearInterval(minuteSetIntervalTimer)
   } 
  }, 60)
}

function secondsTimer25Min(){  
  let seconds = 58
  second.textContent = '59'

  secondSetIntervalTimer = setInterval( () => {
    second.textContent = seconds < 10 ? '0' + seconds : seconds
    seconds--
    if(seconds < 0){
      seconds = 59

      if(minute.textContent === '00'){
        clearInterval(secondSetIntervalTimer)
        somDoTimer25Min.currentTime = 0
        somDoTimer25Min.play()

        quantidadeTimer += 1
        contagemTimerTotal += 1

        if(quantidadeTimer === 4 && quantidadeInterval === 0){
            mensagem.innerHTML = `<strong style="color:#ff0446;">ATENÇÃO:</strong> Você já utilizou o Pomodoro 4 vezes seguidas, recomendamos uma pausa de 10 minutos!!`
          }
      } 
    }
  }, 10)
}

function minutesInterval(){
  let minutes = 3
  minute.textContent = '04'

  stopMinutesInterval = setInterval( () => {
    minute.textContent = minutes < 10 ? '0' + minutes : minutes
    minutes--
    if(minute.textContent === '00'){
      clearInterval(stopMinutesInterval)
    }
  }, 60)
}

function secondsInterval(){
  let seconds = 58
  second.textContent = '59'

  stopSecondsInterval = setInterval(() => {
    second.textContent = seconds < 10 ? '0' + seconds : seconds
    seconds--
    if(seconds < 0){
      seconds = 59

      if(minute.textContent == '00'){
        quantidadeInterval += 1
        clearInterval(stopSecondsInterval)
        somDoIntervalo.play()
      }
    }
  }, 100)
}

function timerEscolhido(){
  let contagem = prompt(`Informe o tempo do Timer que deseja!`)

  if(contagem < 0 || contagem > 59){
    mensagem.innerText = `Timer inválido, digite um número de 1 a 59!`
  } else if (contagem === '' || contagem == null){
    mensagem.innerText = `Campo vázio, informe um número de 1 a 59!`
  } else{
    minute.textContent = contagem < 10 ? '0' + (contagem - 1) : contagem - 1
    minutesTimerEscolhido = setInterval(() => {
      minute.textContent = contagem < 12 ? '0' + (contagem - 2) : contagem - 2
      contagem--
      if(minute.textContent == '00'){
        clearInterval(minutesTimerEscolhido)
        
      }
    }, 1000)
    secondsInterval()
  }
}

somDoTimer25Min.addEventListener('ended', () => {   
  somDoTimer25Min.currentTime = 0 
  somDoTimer25Min.play()
})

somDoIntervalo.addEventListener('ended', () => {
  somDoIntervalo.currentTime = 0
  somDoIntervalo.play()
})

function finalizarTimer25Min(){
  clearInterval(minuteSetIntervalTimer)
  clearInterval(secondSetIntervalTimer)
}

function finalizarTimerIntervalo(){
  clearInterval(stopMinutesInterval)
  clearInterval(stopSecondsInterval)
}

function finalizarTimerEscolhido(){
  clearInterval(stopMinutesTimerEscolhido)
  clearInterval(stopSecondsInterval)
}

function mensagemContagemTimer(){
  if(quantidadeTimer === 0){
    mensagem.textContent = `Você ainda não utilizou o pomodoro!!`
  } else if (quantidadeTimer === 1){
    mensagem.textContent = `Você utilizou a contagem do pomodoro ${contagemTimerTotal} vez!`
  } else{
    mensagem.textContent = `Você utilizou a contagem do pomodoro ${contagemTimerTotal} vezes!`
  }
}
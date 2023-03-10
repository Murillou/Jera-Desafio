const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const mensagem = document.querySelector('#mensagem')
const timer25Min = document.querySelector('#min25')
const intervalo = document.querySelector('#intervalo')
const escolherMinutesTimer = document.querySelector('#escolherTimer')
const contagemPomodoro = document.querySelector('#contagemPomodoro')
const reset = document.querySelector('#reset')
const somDoIntervalo = new Audio("Mídia/intervalEnd.mp3")
const somDoTimer25Min = new Audio('Mídia/Bells.mp3')
let contagemTimerTotal = 0
let quantidadeTimer = 0
let quantidadeInterval = 0
let minuteSetIntervalTimer
let secondSetIntervalTimer
let stopMinutesInterval
let stopSecondsInterval
let stopMinutesTimerEscolhido
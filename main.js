//VARIÁVEIS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randonNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// EVENTOS
btnTry.addEventListener("click", handleTryClick)

btnReset.addEventListener("click", handResetClick)


// FUNÇÕES CALLBACK
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randonNumber) {
        toogleScreen()
        screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
        btnReset.focus()
    }
    inputNumber.value = ''
    xAttempts++
}

function handResetClick () {
    toogleScreen()
    xAttempts = 1
}

function toogleScreen () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
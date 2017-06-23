var guessedNum1 = prompt('The first guess: type your number!')
var guessedNum = parseInt(guessedNum1)
var gameOver = false
var x = Math.floor(Math.random() * (10 - 0)) + 0
var body = document.querySelector('body')
var h1 = document.querySelector('h1')

// this fn. updates h1 text content
function updateH1 (newH1) {
  h1.textContent = newH1
}

function updateBG (newBG) {
  body.style.background = newBG
}

function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('Please input a lower number')
    alert('Key in a lower number')
  } if (guessedNum < randomNumber) {
    updateH1('Please input a higher number')
    alert('Key in a higher number')
  } if (guessedNum === randomNumber) {
    updateH1('BRILLIANT! YOU GOT IT!')
    updateBG('rgb(80,209,222)')
    gameOver = true
  }
  checkForGameover()
}

function checkForGameover () {
  if (gameOver) {
    alert('Press Enter to Continue')
  } else {
    guessedNum1 = prompt('Please try again')
    guessedNum = parseInt(guessedNum1)
    askForANumber(guessedNum, x)
  }
}

function newGame () {
  askForANumber(guessedNum, x)
}

if (!gameOver) {
  newGame()
}

var isPurple = false
setInterval(function () {
  if (isPurple) {
    updateBG('rgb(80, 209, 222)')
  } else {
    updateBG('rgb(217, 43, 194)')
  }

  isPurple = !isPurple
}, 400)

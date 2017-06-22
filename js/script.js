var guessedNum1 = prompt('The first guess: type your number!')
var guessedNum = parseInt(guessedNum1)
var gameOver = false
var x = Math.floor(Math.random() * (10 - 0)) + 0

// this fn. updates h1 text content
function updateH1 (newH1) {
  var h1 = document.querySelector('h1')
  h1.textContent = newH1
}

function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
    alert('Key in a lower number')
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
    alert('Key in a higher number')
  } else if (guessedNum === randomNumber) {
    updateH1('correct')
    gameOver = true
  }
  checkForGameover()
}

function checkForGameover () {
  if (gameOver) {
    alert('reveal the restart button now, stop the game')
  } else {
    guessedNum1 = prompt('type your number again')
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

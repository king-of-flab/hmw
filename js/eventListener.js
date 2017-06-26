var button = document.querySelector('#a')
var button2 = document.querySelector('#b')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
var score = document.querySelector('p')
var colors = ['red', 'green', 'blue']
var colors1 = ['green', 'blue', 'red']
var randColor = 'blue'
var randColor2 = 'green'
var count = 0
function pickColor () {
  randColor = colors[Math.floor(Math.random() * 3)]
  return randColor
}
function changeColor () {
  body.style.backgroundColor = colorChanger()
  h1.innerHTML = pickColor()
  if (randColor === randColor2) {
    button2.addEventListener('click', function (){
      count += 1
      score.innerHTML = count
    })
  }
}


function colorChanger () {
  randColor2 = colors1[Math.floor(Math.random() * 3)]
  return randColor2
}

button.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  setInterval(changeColor, 2000)
})

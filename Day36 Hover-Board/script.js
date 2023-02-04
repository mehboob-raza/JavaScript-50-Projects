<<<<<<< HEAD
const container = document.getElementById('container');
const colors = ['#e9c92e', '#887621', '#972822','#eb483f', '#083fa5', '#a50864','#e88cc2', '#8ce8e7','#368d07'];

const SQUARE = 300

for(let i = 0; i <SQUARE; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColors(square))
    square.addEventListener('mouseout', () => removeColors(square))

    container.appendChild(square)

}

function setColors(element){
    const color = getRandomColor()
    // console.log(color);
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`

}
function removeColors(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
=======
const container = document.getElementById('container');
const colors = ['#e9c92e', '#887621', '#972822','#eb483f', '#083fa5', '#a50864','#e88cc2', '#8ce8e7','#368d07'];

const SQUARE = 300

for(let i = 0; i <SQUARE; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColors(square))
    square.addEventListener('mouseout', () => removeColors(square))

    container.appendChild(square)

}

function setColors(element){
    const color = getRandomColor()
    // console.log(color);
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`

}
function removeColors(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
>>>>>>> 40204de7bec701be47092aea254cff84a1d36753
}
<<<<<<< HEAD
const boxesContainer  = document.getElementById('boxes')

const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big') )
function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = ` ${-j * 125}px ${-i * 125}px `
            console.log(box);
            boxesContainer.appendChild(box)
        }
    }
}

=======
const boxesContainer  = document.getElementById('boxes')

const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big') )
function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = ` ${-j * 125}px ${-i * 125}px `
            console.log(box);
            boxesContainer.appendChild(box)
        }
    }
}

>>>>>>> 40204de7bec701be47092aea254cff84a1d36753
createBoxes()
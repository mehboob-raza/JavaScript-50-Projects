const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function(e) {
        const a = e.clientX
        const b = e.clientY

        console.log(a, b)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log ('the left is : ' +buttonLeft + 'and the right is : ' + buttonTop)

        const xInside = a - buttonLeft
        const yInside = b - buttonTop
        // console.log('the x inside is : ' + xInside + ' y is : ' + yInside)
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.left = xInside + 'px'
        circle.style.top = yInside + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)

    })
})
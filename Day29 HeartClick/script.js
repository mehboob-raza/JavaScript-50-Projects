const love = document.querySelector('.love')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0
love.addEventListener('click', (e) => {
    // console.log(1111)
    if(clickTime === 0){
        clickTime = new Date().getTime()
        // console.log(clickTime);
    }
    else{
        if((new Date().getTime() - clickTime) > 800){
            console.log(123);
            createHeart(e);
            clickTime = 0
        }
        else{
            clickTime = new Date().getTime()
            console.log(clickTime);
        }
    }
})
function createHeart(e){
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX 
    const y = e.clientY

    const leftoffset = e.target.offsetLeft
    const topoffset = e.target.offsetTop

    const xInside = x - leftoffset
    const yInside = y - topoffset
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    
    love.appendChild(heart)
    times.innerHTML = ++timesClicked
    console.log(xInside, yInside);

    setTimeout(() => heart.remove(), 5000)
}
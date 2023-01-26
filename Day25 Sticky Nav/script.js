const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        // console.log('scroll', window.scrollY)
        // console.log('offsetHeight', nav.offsetHeight)
        // console.log(nav.offsetHeight + 150);
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}
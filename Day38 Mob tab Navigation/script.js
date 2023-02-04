<<<<<<< HEAD
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () =>{
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')

    })
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
=======
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () =>{
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')

    })
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
>>>>>>> 40204de7bec701be47092aea254cff84a1d36753
}
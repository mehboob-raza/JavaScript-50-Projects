const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) =>{
    // console.log('clickkk');
    if(e.target.parentNode.classList.contains('rating')){
        e.target.parentNode.classList.add('active')
        removeActive()

        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating);
    }
})
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong> Feedback ${selectedRating}</strong>
        <p>We will use your feedback to improve our services.</p>
    `
})
function removeActive(){
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}
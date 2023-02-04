<<<<<<< HEAD
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
=======
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
>>>>>>> 40204de7bec701be47092aea254cff84a1d36753
})
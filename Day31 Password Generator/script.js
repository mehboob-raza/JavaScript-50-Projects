const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const  lowerEl = document.getElementById('lowercase');
const upperEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower : getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols
}

clipboardEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    console.log(password, 'password');
    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('copy password');
})

generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value
    // console.log(length);
    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasSymbol = symbolEl.checked
    const hasNumber = numberEl.checked
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber,hasSymbol, length);
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    // console.log(types);

    if(typesCount === 0){
        return ''
    }
    for(let i = 0; i < length; i++){
        typesArr.forEach(type =>{
            // console.log(type);
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}
// console.log(getRandomLower())

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

function getRandomSymbols(){
    const symbols = '!@#$%^&*()_-=+<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length )]
}
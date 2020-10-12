let btn = document.getElementById('add');
let inputValue = document.getElementById('input');
let displayMessage = document.getElementById("message")
let message = document.createElement('p');

function palindrome(str) {
    return str.split('').reverse().join('') === str;
}

btn.onclick = () => {
    if (palindrome(inputValue.value)) {
        message.innerHTML = 'Succes! The input word is a palindrome.';
        displayMessage.appendChild(message);
    } else {
        message.innerHTML = 'Not this time! This word is not a palindrome';
        displayMessage.appendChild(message);
    }
}
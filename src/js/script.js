let btn = document.getElementById('add');
let inputValue = document.getElementById('input');
let lengthRequired = document.getElementById("message")

function palindrome(str) {
    if (str.length > 2) {
        str.split('').reverse().join('') === str;
    } else {
        let message = document.createElement("p");
        message.innerHTML = 'Sorry. The word has to be longer than 2 characters';
        lengthRequired.appendChild(message)
    }
}

btn.onclick = () => {
    if (palindrome(inputValue.value)) {
        alert('Succes! The input word is a palindrome.');
    } else {
        alert('Not this time! This word is not a palindrome');
    }
}
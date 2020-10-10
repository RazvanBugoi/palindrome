let btn = document.getElementById('add');
let inputValue = document.getElementById('input');

function palindrome(str) {
    return str.split('').reverse().join('') === str;
}

btn.onclick = () => {
    if (palindrome(inputValue.value)) {
        alert('Succes! The input word is a palindrome.');
    } else {
        alert('Not this time! This word is not a palindrome');
    }
}
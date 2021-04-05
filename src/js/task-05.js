const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        outputRef.textContent = 'незнакомец';
    } else {
        outputRef.textContent = event.currentTarget.value;
    }

}

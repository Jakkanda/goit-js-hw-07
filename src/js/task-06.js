const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputLostFocus);
function onInputLostFocus(event) {
    console.dir(event.currentTarget);
    if (Number(event.currentTarget.value.length) === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
}
const inputRef = document.querySelector('#validation-input');
const valid = 'valid';
const invalid = 'invalid';
inputRef.addEventListener('blur', onInputLostFocus);
function onInputLostFocus(event) {
    console.dir(event.currentTarget);
    if ((event.currentTarget.value.length) === Number(inputRef.dataset.length)) {
        inputRef.classList.remove(invalid);
        if (!inputRef.classList.contains(valid)) {
            inputRef.classList.add(valid);
        }
          
    } else {
        inputRef.classList.remove(valid);
        if (!inputRef.classList.contains(invalid)) {
          inputRef.classList.add(invalid);
        }
    }
}
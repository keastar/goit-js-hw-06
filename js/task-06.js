const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));


inputEl.addEventListener('change', onInputChange);
inputEl.addEventListener('blur', onInputBlur);

function onInputChange(event) {
    console.log(event.currentTarget.value);
};

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    console.log(inputLength);

    if (event.currentTarget.value.length !== inputLength && !inputEl.classList.contains('invalid')) {
        inputEl.classList.add('invalid');
    }
    else if (event.currentTarget.value.length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
  }
    
};
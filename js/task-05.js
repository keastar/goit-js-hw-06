const refs = {
  inputEl: document.querySelector('#name-input'),
  nameEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameEl.textContent = event.currentTarget.value;

    if (event.currentTarget.value == '')
        refs.nameEl.textContent = 'Anonymous';
    
};
const controlSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlSizeEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};

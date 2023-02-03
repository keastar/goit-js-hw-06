const buttonEl = document.querySelector('.change-color');
const codeColorEl = document.querySelector('.color');
const bgColorEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', (event) => {
  bgColorEl.style.backgroundColor = getRandomHexColor();
  codeColorEl.textContent = bgColorEl.style.backgroundColor;
    
});



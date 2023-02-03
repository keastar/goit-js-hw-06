const refs = {
  contentEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
};
const buttonCr = document.querySelector('#createBtn');
const buttonDs = document.querySelector('#destroyBtn');

buttonCr.addEventListener('click', onClickBtnCr);
buttonDs.addEventListener('click', onClickBtnDs);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickBtnCr() {
  const n = refs.inputEl.value;
  let wh = 30;
  for (let i = 1; i <= n; i++) {
    const divEl = document.createElement('div');
    divEl.style.background = getRandomHexColor();
    divEl.style.width = wh+'px';
    divEl.style.height = wh+'px';
    refs.contentEl.appendChild(divEl);
    wh += 10;
  }
  console.log('contentEl');
}

function onClickBtnDs() {
  refs.contentEl.innerHTML = '';
}

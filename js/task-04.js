const counterValueEl = document.querySelector('#value');
const addCountBtn = document.querySelector('[data-action="increment"]');
const removeCountBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
function increment() {
    counterValue += 1;
    counterValueEl.innerHTML = counterValue;
};

addCountBtn.addEventListener("click", increment);

function decrement() {
	counterValue -= 1;
    counterValueEl.innerHTML = counterValue;
};

removeCountBtn.addEventListener("click", decrement);
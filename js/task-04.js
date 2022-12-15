const value = document.querySelector('#value');
const subBtn = document.querySelector("[data-action='increment']");
const addBtn = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};

subBtn.addEventListener('click', increment);
addBtn.addEventListener('click', decrement);

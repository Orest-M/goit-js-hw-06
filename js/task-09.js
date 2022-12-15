const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

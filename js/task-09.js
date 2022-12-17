const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

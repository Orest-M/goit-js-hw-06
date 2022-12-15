const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  if (output.textContent === '') {
    output.textContent = 'Anonymus';
  } else {
    output.textContent = event.currentTarget.value;
  }
});

const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (Number(input.dataset.length) === input.value.length) {
    changeClass('valid', 'invalid');
  } else {
    changeClass('invalid', 'valid');
  }
});

const changeClass = (addClass, remClass) => {
  input.classList.add(addClass);
  input.classList.remove(remClass);
};

const form = document.querySelector('.login-form');

console.dir(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    alert('Всі поля мають бути заповнені');
  }

  console.log(data);
  form.reset();
});

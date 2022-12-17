const form = document.querySelector('.login-form');

console.dir(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (email.value === '' || password.value.trim() === '') {
    return alert('Всі поля мають бути заповнені');
  }

  console.log(data);
  form.reset();
});

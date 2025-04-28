function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '' || password === '') {
    document.getElementById('error').textContent = 'Введите имя и пароль!';
    return;
  }

  localStorage.setItem('hackerUser', username);
  window.location.href = 'simulator.html';
}
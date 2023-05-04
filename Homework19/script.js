// Получаем элементы поля пароля и сообщений об ошибках
const passwordField = document.getElementById('password');
const uppercaseError = document.getElementById('uppercase-error');
const digitError = document.getElementById('digit-error');
const punctuationError = document.getElementById('punctuation-error');
const lengthError = document.getElementById('length-error');

// Добавляем обработчик события на изменение поля пароля
passwordField.addEventListener('input', function() {
  const password = passwordField.value;
  
  // Проверяем, содержит ли пароль большую букву, цифру и знак пунктуации
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password);
  
  // Проверяем, достаточно ли длинный пароль
  const isLengthValid = password.length >= 8;
  
  // Отображаем или скрываем сообщения об ошибках в зависимости от результатов проверки
  uppercaseError.style.display = hasUppercase ? 'none' : 'block';
  digitError.style.display = hasDigit ? 'none' : 'block';
  punctuationError.style.display = hasPunctuation ? 'none' : 'block';
  lengthError.style.display = isLengthValid ? 'none' : 'block';
});

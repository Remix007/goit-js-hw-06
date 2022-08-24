// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const textInputEl = document.querySelector('input');
const inputLengthEl = document.querySelector('input[data-length ="6"]');

console.log(textInputEl);

const blueredInputValidation = () => {
  if (textInputEl.value.length === Number(inputLengthEl.dataset.length)) {
    textInputEl.classList.add('valid');
    textInputEl.classList.remove('invalid');
  } else {
    textInputEl.classList.add('invalid');
    textInputEl.classList.remove('valid');
  }
};
console.log(inputLengthEl.dataset.length);
textInputEl.addEventListener('blur', blueredInputValidation);
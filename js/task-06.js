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

const refs = {
    input: document.querySelector("#validation-input"),
  };
  const totalLength = refs.input.getAttribute("data-length");
  // console.log(totalLength);
  const intTotallenght = parseInt(totalLength, 10);
  // console.log(intTotallenght);
  
  refs.input.addEventListener("focus", onInputFocus);
  refs.input.addEventListener("blur", onInputBlur);
  
  function onInputFocus() {
    console.log("Включив фокус");
  }
  function onInputBlur() {
    console.log("Інпут втратив фокус - blur");
    if (refs.input.value.length === intTotallenght) {
      refs.input.classList.remove("invalid");
      refs.input.classList.add("valid");
    } else if (refs.input.value.length !== intTotallenght) {
      refs.input.classList.remove("valid");
      refs.input.classList.add("invalid");
    }
  }
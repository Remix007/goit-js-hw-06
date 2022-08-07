// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const backgroundVidjet = document.querySelector(".widget");
const btnChangeColor = backgroundVidjet.querySelector(".change-color");
const textNameColor = backgroundVidjet.querySelector(".color");
const bodyChangeColor = window.document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyChangeColor.style.backgroundColor = color;
  textNameColor.textContent = color;
});
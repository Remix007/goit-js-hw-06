// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
//  текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

// Завдання 1

 const numbersOfCategories =
  document.querySelector("#categories").children.length;
console.log(`Number of categories: ${numbersOfCategories}`);


//Завдання 2
const itemsRef = document.querySelectorAll(".item");

// console.log(itemsRef);

for (const item of itemsRef) {
  const title = item.querySelector("h2").textContent;
  //   console.log(title);
  const quantityItems = item.querySelectorAll("li").length;
  //   console.log(quantityItems);
  console.log(`Category:  ${title}`);
  console.log(`Elements: ${quantityItems}`);
}
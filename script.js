// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...
// (необходимые значения добавьте с помощью BOM)

console.log(navigator);
console.log(location);
console.log(
  `На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`
);

// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
const names = document.querySelectorAll("li");
names.forEach((item) => console.log(item.textContent));
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
for (let i = 0; i < names.length; i++) {
  names[i].textContent = i;
}

// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
const searchEl = document.querySelectorAll(".forRemove");
console.log(searchEl);
searchEl.forEach((el) => el.remove());

// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
const addText = document.createElement("p");
addText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio hic laboriosam est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque mollitia maxime consectetur?";
addText.style.fontSize = "36px";
addText.style.fontWeight = "800";
document.body.append(addText);
// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
function addElement(tag, color, text) {
  const createEl = document.createElement(tag);
  createEl.style.color = color;
  createEl.textContent = text;
  return createEl;
}
console.log(addElement("h1", "green", "Hello world!"));
console.log(addElement("p", "pink", "Lorem ipsum"));
console.log(addElement("span", "violet", "Hello!"));

document.body.append(addElement("h1", "green", "Hello world!"));
document.body.append(addElement("p", "pink", "Lorem ipsum"));
document.body.append(addElement("span", "violet", "Hello!"));

// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
const selectTag = document.querySelector("select");

for (let i = 1960; i <= 2020; i++) {
  selectTag.innerHTML += `<option> ${i}</option>`;
}

// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
const orderStatus = document.querySelector(".order-status");
clients.forEach((element) => {
  element.order ? (element.order = "оплатил") : (element.order = "отменил");
  orderStatus.innerHTML += `<li>Клиент ${element.name} ${element.order} заказ </li>`;
});

// Задание 8
// Есть массив ссылок:
let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

const addLinks = document.createElement("div");
addLinks.style.backgroundColor = "#f0f0f0";
addLinks.style.padding = "20px";
addLinks.style.color = "#888888";
addLinks.style.display = "flex";
addLinks.style.flexDirection = "column";

linksArr.forEach((element) => {
  addLinks.innerHTML += `<a href=${element} target="_blank">${element}</a>`;
});
document.body.append(addLinks);

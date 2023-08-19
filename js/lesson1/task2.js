//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10
const value = 65;
const hour = String(Math.floor(value / 60)).padStart(2, 0);
// const modeH = String(hour).padStart(2, 0)
const min = value % 60;
const modeMin = String(min).padStart(2, 0);
const result = `${hour}:${modeMin}`;


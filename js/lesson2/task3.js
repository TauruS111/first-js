/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

console.log(user)
user.mood = 'happy'
user.hobby = 'skydiving'
console.log(user)
user.premium = false
for (const element of Object.keys(user)) {
    // console.log(element)
    console.log(`${element}:${user[element]}`)
}
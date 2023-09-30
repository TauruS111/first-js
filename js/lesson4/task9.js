/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const button = document.querySelector("#passwordButton");
const input = document.querySelector("#passwordInput");

button.addEventListener("click", hidePassword);

function hidePassword(event) {
  const attributeValue = input.getAttribute("type");

  if (attributeValue === "text") {
    input.setAttribute("type", "password");
    event.currentTarget.textContent = "Приховати";
  } else {
    input.setAttribute("type", "text");
    event.currentTarget.textContent = "Розкрити";
  }
}

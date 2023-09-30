{/* <div>
      <p class="taskTitle">ЗАДАЧА 3</p>
      <input id="passwordInput" type="text" />
      <button id="passwordButton">Скрыть</button>
    </div> */}

const passInput = document.querySelector('#passwordInput');
const hideBtn = document.querySelector('#passwordButton');

hideBtn.addEventListener('click', () => {
    
    if (passInput.type === 'text') {
        passInput.type = 'password';
        hideBtn.textContent = 'Показать';
    }
    else {
        passInput.type = 'text';
        hideBtn.textContent = 'Скрыть';
    }
})
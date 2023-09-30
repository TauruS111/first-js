/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

/* <div>
      <p class="taskTitle">ЗАДАЧА 7</p>
      <div class="outerCircle">
        <div class="innerCircle"></div>
      </div>
    </div> */

const circEl = document.querySelector('.outerCircle');

circEl.addEventListener('click', (event) => {
    const eventFlag = event.currentTarget;

    if (eventFlag.style.position === 'absolute') {
        window.removeEventListener('mousemove', mouseMoveFnc);
        eventFlag.style.position = 'static';
        return;
    }

    eventFlag.style.position = 'absolute';
    window.addEventListener('mousemove', mouseMoveFnc);
  
})
function mouseMoveFnc(event) {
    let posX = event.pageX;
    let posY = event.pageY;

    console.log(event);

    circEl.style.top = (posY - 15) + "px";   // `${posY - 15}px`
    circEl.style.left = (posX - 15) + "px";  // `${posX - 15}px`
    
}


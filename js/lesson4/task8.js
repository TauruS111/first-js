// const btn = document.querySelector('#alertButton')
// const input = document.querySelector('#alertInput');
// btn.addEventListener('click', showText);
// function showText(){
//  console.log(input.value);
// }

const btn =document.querySelector('#swapButton');
const firstInput = document.querySelector('#leftSwapInput');
const secondInput = document.querySelector('#rightSwapInput');

btn.addEventListener('click', swapInput);
function swapInput(e){
    const leftInput = firstInput.value ;
    const rightInput = secondInput.value;
    firstInput.value = rightInput;
    secondInput.value = leftInput;
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const BtnEls = document.querySelectorAll('button');
const bodyEl = document.querySelector('body');

let startEl;
let intervalChange = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



BtnEls.forEach( element => {
    
    if (element.dataset.action === 'start') {
        element.addEventListener('click', onClickStart);
    }
    
    if (element.dataset.action === 'stop') {
        element.addEventListener('click', onClickStop);
    }
    
})
function changeBg(){
    const randomColNum = randomIntegerFromInterval(0, colors.length);
    bodyEl.style.background = colors[randomColNum];
    }

function onClickStart(e) {
    intervalChange = setInterval(changeBg, 1000);
    startEl = e.target;
    startEl.disabled = true;
}

function onClickStop() {
    clearInterval(intervalChange);
    startEl.disabled = false;
}



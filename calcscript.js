let runningTotal = 0;
let buffer = "0";
let previousOperator;


const screen = document.querySelector('.screen');

function buttonClick() {
    

};


function init() {
    document.querySelector('.calc-buttton').addEventListener('click', function(event) {buttonClick(event.target.innerText)})

}

init();
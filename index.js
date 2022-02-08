


const span1 = document.querySelector('.spanstart-value');

const divBtn = document.querySelector('.button-div')


const addButton = document.querySelector('.plus-btn');

const subButton = document.querySelector('.minus-btn');



let startValue = 0;


addButton.addEventListener('click', () => {
    startValue += 1;

    span1.innerHTML = startValue

    if(startValue >= 10){

        startValue = 0;
    }
})


subButton.addEventListener('click', () => {
    startValue -= 1;

    span1.innerHTML = startValue;

    if(startValue <= -10){
        startValue = 0;
    }
})



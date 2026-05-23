const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEL = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let count = 0
let timerId = null;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

})

timeList.addEventListener('click', (event) => {
    //делегирования события - передача действия
    // classList.contains - поиск по классу
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        count++;
        event.target.remove()
        crateRanBo()
    }
})


function startGame() {
    timerId = setInterval(decreaseTime, 1000);
    crateRanBo()
    setTime(time)

}

function decreaseTime() {
    if(time  === 0){
        finishGame()
    }else {
        let current = --time
        if(current <10){
            current =  `0${current}`;
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEL.innerHTML = `00:${value}`;
}

function  finishGame(){
    clearInterval(timerId);
    timeEL.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Your score: <span class="primary">${count}</span></h1>`;

}

function  crateRanBo(){
    const circle = document.createElement('div');
    const { width, height } = board.getBoundingClientRect();
    const size = getRandomNumber(10,60)
    const x = getRandomNumber(0,width-size)
    const y = getRandomNumber(0,height-size)


    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;


    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


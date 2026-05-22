const  board = document.querySelector('#border');
const SQUARE_NUMBER = 500;
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white", "black", "grey"]

for(let i = 0;i <SQUARE_NUMBER;i++){
    const square = document.createElement('div');

    square.classList.add('square');
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })

    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })



    //добавления кв в html код
     board.append(square);

}

function setColor(element){
    const col = getColor()
    element.style.backgroundColor =  col;
    element.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getColor(element){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
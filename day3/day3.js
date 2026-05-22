const upbtn = document.querySelector(".up-button");
const downbtn = document.querySelector(".down-button");
const  sizeWind = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");


const SlideCount = mainSlide.querySelectorAll('div').length



sidebar.style.top = `-${(SlideCount-1)*100}vh`;
let res = 0 ;

upbtn.addEventListener("click", (e) => {
    chanchSlide('up' );
})

downbtn.addEventListener("click", (e) => {
    chanchSlide('down');
})

document.addEventListener("keydown",
    event =>{
        if(event.key === "ArrowUp"){
            chanchSlide('up');
        }else if(event.key === "ArrowDown"){
            chanchSlide('down');
        }
    })


function chanchSlide( direction) {
    if( direction === "up" ) {
        res++
        if(res === SlideCount){
            res = 0 ;
        }
    }else if( direction === "down"){
        res--
        if(res < 0){
            res = SlideCount -1;
        }
    }

    const height = sizeWind.offsetHeight;
    // Анимация
    mainSlide.style.transform = `translateY(-${height*res}px)`;
   sidebar.style.transform = `translateY(${height*res}px)`;

}

function slidesPlugin(actSlides = 0){
    const slides = document.querySelectorAll('.slide');

    slides[actSlides].classList.add('active');


    for(const i of slides) {
        i.addEventListener('click', (e) => {
            clearActiveClasses() // гасит все активности
            i.classList.add('active'); //добавляет активность
        })
    }
    function clearActiveClasses() {
        slides.forEach((i)=>{
            i.classList.remove('active');
        })
    }
}

slidesPlugin()
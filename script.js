
const hamborgerIcon = document.getElementById('hamburger');
const closeNav = document.getElementById('closeNav');
const navBar = document.getElementById('navBar');
const Slider = document.querySelectorAll(".Slider");
const left = document.querySelectorAll(".left");
const right = document.querySelectorAll(".right");
let sliderIndex = 0;
let interavaliID = null;

hamborgerIcon.addEventListener('click', ()=>{
    navBar.style.display = 'flex';
})

closeNav.addEventListener('click', ()=>{
    navBar.style.display = 'none';
})



left.forEach(btn => {
    btn.addEventListener('click', prevSlider)
})
right.forEach(btn => {
    btn.addEventListener('click', nextSlider)
})

// left.addEventListener("click",prevSlider)
document.addEventListener("DOMContentLoaded",insitializeSlider);

function insitializeSlider() {
    Slider[sliderIndex].style.display ='flex';
    interavaliID = setInterval(nextSlider,1000);
    console.log(interavaliID)
}
function showSlide(index) {
    if(index >= Slider.length){
        sliderIndex = 0;
    }else if (index < 0 ) {
        sliderIndex = Slider.length -1 ;
    }

    Slider.forEach(slide =>{
        slide.style.display="none";
    })
    Slider[sliderIndex].style.display ='flex';

}

function prevSlider() {
    clearInterval(interavaliID)
    sliderIndex -- ;
    showSlide(sliderIndex)

}

function nextSlider() {
    sliderIndex++;
    showSlide(sliderIndex)
}

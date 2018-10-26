// class Carousel {

// }

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

const carousel = document.querySelector('.carousel');
const leftBtn = carousel.querySelector('.left-button');
const rightBtn = carousel.querySelector('.right-button');
const images = carousel.querySelectorAll('img');
let imgIndex = 0;

leftBtn.addEventListener('click',()=>{
    images[imgIndex].classList.remove('visible');
    if(imgIndex <= 0){
        imgIndex = images.length-1;
    }
    else{
        imgIndex--;
    }
    images[imgIndex].classList.add('visible');
})

rightBtn.addEventListener('click',()=>{
    images[imgIndex].classList.remove('visible');
    if(imgIndex >= images.length-1){
        imgIndex = 0;
    }
    else{;
        imgIndex++;
    }
    images[imgIndex].classList.add('visible');
})

images[0].classList.add('visible');

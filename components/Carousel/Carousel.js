
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let imageIndex = 1;

leftButton.addEventListener('click', (event) => {
    console.log('you clicked the left button')
    pressButton(-1)
});

rightButton.addEventListener('click', (event) => {
    console.log('you clicked the right button');
    pressButton(1);
})

const pressButton = (n) => {
    showSlides(imageIndex += n);
}

const showSlides = (n) => {
    let carousel = document.querySelectorAll('.image-carousel');
    if(n > carousel.length) {imageIndex = 1};
    if(n < 1) {imageIndex = carousel.length};
    for(let i = 0; i < carousel.length; i++){
        carousel[i].style.display = 'none';
    }
    carousel[imageIndex - 1].style.display = 'flex';
}




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
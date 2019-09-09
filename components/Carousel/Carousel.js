// Carousel


// DOM strings
let carouselImg = document.querySelectorAll('.carousel img');
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');

// current variable
let current = 0;

// images
let images = Array.from(carouselImg);

// reset images
const reset = () =>{
    for(let i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
}

// shows the first slide
const startSlide = () => {
    reset();
    images[current].style.display = 'block';
}

// slides right
const slideRight = () => {
    reset();
    current++
    images[current].style.display = 'block';
    // current++
    // console.log(current);
}

// right button handler
rightButton.addEventListener('click', () => {
// clears the interval function on click
clearInterval(interval);

    if(current === images.length - 1){
        current = - 1;
    }
    slideRight();
});

// slides left
const slideLeft = () => {
    reset();
    current--
    images[current].style.display = 'block';
    // current--
    // console.log(current)
}

// left button handler
leftButton.addEventListener('click', () => {
// clears the interval function on click
clearInterval(interval);

    if (current === 0){
        current = images.length;
    }
    slideLeft();
})

// automatically slides right after every 3 seconds 
let interval = setInterval(() => {
    if(current === images.length - 1){
        current = - 1;
    }
    slideRight();
}, 3800);

// start slide init
startSlide();














/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

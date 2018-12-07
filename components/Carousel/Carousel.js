// class Carousel {
//     constructor(image) {
//         this.image = image;

//     }
// }

let carousel = document.querySelector('.carousel');
let left = document.querySelector('.left-button');
let right = document.querySelector('.right-button');
let images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

images[0].style.display = 'flex';
images[0].style.opacity = '1';

// images.forEach(image => new Carousel(image));

right.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    TweenMax.set(images[currentIndex], {opacity: 0});
    if (currentIndex === (images.length - 1)) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    TweenMax.to(images[currentIndex], 1, {opacity: 1});
    images[currentIndex].style.display = 'flex';
})

left.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    TweenMax.set(images[currentIndex], {opacity: 0});
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--
    }
    TweenMax.to(images[currentIndex], 1, {opacity: 1});
    images[currentIndex].style.display = 'flex';
})
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

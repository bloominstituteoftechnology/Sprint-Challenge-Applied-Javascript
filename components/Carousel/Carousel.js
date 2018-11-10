class Carousel {

}

let carousel = document.querySelector('carousel');
let leftBtn = document.querySelector('left-button');
let rightBtn = document.querySelector('right-button');
let CarouselImg = document.querySelectorAll('Carousel-Img');

CarouselImg[0].textContent = siteContent.nav["./assets/carousel/mountains.jpeg"]
CarouselImg[1].textContent = siteContent.nav["./assets/carousel/computer.jpeg"]
CarouselImg[2].textContent = siteContent.nav["./assets/carousel/trees.jpeg"]
CarouselImg[3].textContent = siteContent.nav["./assets/carousel/turntable.jpeg"]

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
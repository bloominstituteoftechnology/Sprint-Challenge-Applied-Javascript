class Carousel {

}

let carousel = document.querySelector('.carousel');
let leftButton = carousel.querySelector('.left-button')
let rightButton = carousel.querySelector('.right-button')
let cImages = carousel.querySelectorAll('img')
let index = 0;
cImages[index].style.display = 'block';
leftButton.addEventListener('click', () => {
    if (index === 0) {
       index = cImages.length
    }
    cImages.forEach( (item) => {
        item.style.display = 'none'
    })
    cImages[--index].style.display = 'block';
})

rightButton.addEventListener('click', () => {
    if (index === cImages.length -1) {
        index = -1;
     }
     cImages.forEach( (item) => {
         item.style.display = 'none'
     })
    cImages[++index].style.display = 'block';

})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

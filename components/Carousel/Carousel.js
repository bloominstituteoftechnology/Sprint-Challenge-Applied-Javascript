class Carousel {
    constructor(element) {
        this.element = element;
        this.leftE = leftE;
    

        this.element.addEventListener('click', () => clicked());
    }

    clicked() {
        if (this.leftE) {
            if (currentIndex == 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = currentIndex -1;
            }
        } else {
            if (currentIndex == images.length -1) {
                currentIndex = 0;
            } else {
                currentIndex = currentIndex + 1;
            }
        }
        imgRef.src = images[currentIndex];
    }
    


};

let carousel = document.querySelector('.carosel');
let left = document.querySelector('.carosel .left-button');
let right = document.querySelector('.carosel .right-button');

//Array index of images
let images = Array.from(imgRef).map((image) => {return image.src})
console.log(images);


new Carousel(left, true);
new Carousel(right, false);

let currentIndex = 0;
//Image ref
let imgRef = document.querySelectorAll('.carosel img');
imgRef.style.display = 'block';


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(photoCarousel) {
        this.photoCarousel = photoCarousel;
        this.currentIndex = 0;

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
       
        this.imageContent = document.querySelectorAll('.image');
        
        this.imgArray = [];
        this.imageContent.forEach(image => this.imgArray.push(new Image(image)));
        console.log(this.imgArray[this.currentIndex]);
        this.leftButton.addEventListener('click', () => {this.leftClick()});
        this.rightButton.addEventListener('click', () => {this.rightClick()});

    };

    leftClick() {
        this.imageContent.forEach(picture => picture.classList.remove('active-img'));
        console.log(this.currentIndex);
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.imgArray.length - 1;
        }
        this.imgArray[this.currentIndex].selectImage();
        
    }  

    rightClick() {
        this.imageContent.forEach(picture => picture.classList.remove('active-img'));
        console.log(this.currentIndex);
        this.currentIndex++;
        if (this.currentIndex >  this.imgArray.length - 1) {
            this.currentIndex = 0;
        }
        this.imgArray[this.currentIndex].selectImage();
    }
}


class Image {
    constructor(imageContent) {
        this.imageContent = imageContent;
        console.log('created');
    }

    selectImage() {
        this.imageContent.classList.add('active-img');
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(image => new Carousel(image));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


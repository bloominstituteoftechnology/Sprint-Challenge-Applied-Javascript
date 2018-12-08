// class Carousel {
//     constructor(photoCarousel) {
//         this.photoCarousel = photoCarousel;
//         this.index = 0;

//         this.leftButton = document.querySelector('.left-button');
//         this.rightButton = document.querySelector('right-button');
//        // this.photoData = this.photoCarousel.dataset.tab;

//        // this.imageContent = document.querySelectorAll(`.image[data-tab='${this.photoData}']`);
//         this.imageContent = document.querySelectorAll('.image');
//         this.imageContent = new Image(this.imageContent);

//         this.leftButton.addEventListener('click', () => {this.leftClick()});
//         this.rightButton.addEventListener('click', () => {this.rightClick()});

//     };

//     leftClick() {
//         let pictures = document.querySelectorAll('.image');
//          pictures.forEach(picture => picture.classList.remove('active-img'));
//         // this.photoCarousel.classList.add('active-img');
//         // this.pictures.forEach(pictures => (pictures.selectImage));
//         for (let i = 0; i < pictures.length; i++) {
//             this.pictures[i].add('active-image');
//         }
//     }

//     rightClick() {
//         let pictures = document.querySelectorAll('.image');
//         Array.from(pictures).forEach(picture => picture.classList.remove('active-img'));
//         pictures[3].classList.add('active-img');
//         this.pictures.forEach(pictures => (pictures.selectImage));
//     }
// }


// class Image {
//     constructor(imageContent) {
//         this.imageContent = imageContent;
//     }

//     selectImage() {
//         this.imageContent.style.display = 'flex';
//     }
// }

// let carousel = document.querySelector('.image');
// carousel.forEach(image => new Carousel(image));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(photoCarousel) {
        this.photoCarousel = photoCarousel;
        this.imageContent = document.querySelectorAll('.image');
        this.index = 0;

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('right-button');

        this.leftButton.addEventListener('click', () => {this.leftClick()});
        this.rightButton.addEventListener('click', () => {this.rightClick()});

    }

    leftClick(){
        this.index = this.index++;

    }

    rightClick(){
        this.index = this.index--;
    }

}
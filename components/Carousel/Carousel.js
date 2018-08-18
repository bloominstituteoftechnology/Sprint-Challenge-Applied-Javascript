// Class for Carousel to house the mainCarousel
class Carousel {
    // Defined the constructor as carouselComponents for creating and initializing the object with a class 
    constructor(carouselComponents) {
        // Defined the constructor to reference as this.carouselComponents
        this.carouselComponents = carouselComponents;
        // Defined the .left-button CSS class as this.carouselLeftButton
        this.carouselLeftButton = this.carouselComponents.querySelector('.left-button');``
        // Defined the .right-button CSS class as this.carouselRightButton
        this.carouselRightButton = this.carouselComponents.querySelector('.right-button');
        // Defined the HTML img element within this.carouselComponents as this.carouselImages
        this.carouselImages = this.carouselComponents.querySelectorAll('img');
        // Added an event listener on 'click' for this.carouselRightButton to invoke this.nextImage()
        this.carouselRightButton.addEventListener('click', () => this.nextImage());
        // Added an event listener on 'click' for this.carouselLeftButton to invoke this.nextImage()
        this.carouselLeftButton.addEventListener('click', () => this.lastImage());
    }
    // This method is created to advance through the images
    nextImage(){
        // Ternery operation that checks if the iterator 'i' evaluates to 3. If it is then 'i' evaluates to 0. If not, add 1 to 'i' 
        (i === 3) ? i = 0 : i++;
        // Turns this.carouselImages to an array and sets the display of the image's CSS display value to 'none'
        Array.from(this.carouselImages).forEach(image => image.style.display = 'none');
        // Assigns value of 'flex' to the iterated this.carouselImages variable
        this.carouselImages[i].style.display = 'flex';
        // Debug Code to see which index of the image is being displayed
        // console.log(`displaying image ${i}`);
    }
    lastImage(){
        // Ternery operation that checks if the iterator 'i' evaluates to 0. If it is then 'i' evaluates to 3. If not, subtract 1 to 'i'
        (i === 0) ? i = 3 : i--;
        // Turns this.carouselImages to an array and sets the display of the image's CSS display value to 'none'
        Array.from(this.carouselImages).forEach(image => image.style.display = 'none');
        // Assigns value of 'flex' to the iterated this.carouselImages variable
        this.carouselImages[i].style.display = 'flex';
        // Debug Code to see which index of the image is being displayed
        // console.log(`displaying image ${i}`);
    }
}
// Assigns 'i' to evaluate to 0, the beginning of the image carousel
let i = 0;
// Assigns mainCarousel to the first CSS class that is 'carousel'
let mainCarousel = document.querySelector('.carousel');
// Feeds mainCarousel to the class constructor 'Carousel'
mainCarousel = new Carousel(mainCarousel);
// Sets the CSS's 'display' style attribute on the 0 index number to 'flex'
mainCarousel.carouselImages[i].style.display = 'flex';
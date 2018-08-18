let i = 0;
let mainCarousel = document.querySelector('.carousel');
class Carousel {
    constructor(carouselComponents) {
        this.carouselComponents = carouselComponents;
        this.carouselComponents.querySelector('.left-button').addEventListener('click', () => this.nextImage());
        this.carouselComponents.querySelector('.right-button').addEventListener('click', () => this.lastImage());
        this.carouselImages = this.carouselComponents.querySelectorAll('img');
    }
    nextImage(){
        this.carouselImages[i].style.display = 'none';
        i === this.carouselImages.length - 1 ? i = 0 : i++;
        this.carouselImages[i].style.display = 'flex';
    }
    lastImage(){
        this.carouselImages[i].style.display = 'none';
        i === 0 ? i = this.carouselImages.length - 1 : i--;
        this.carouselImages[i].style.display = 'flex';
    }
}
mainCarousel = new Carousel(mainCarousel);
mainCarousel.carouselImages[i].style.display = 'flex';
class Carousel {
    constructor(carouselComponent) {
        this.element = carouselComponent;

        this.imageList = this.element.querySelectorAll('img');
        this.imageList = Array.from(this.imageList).map( image => new ImageList(image, this.element) );
        this.currentImage = this.imageList[0];
        this.currentIndex = this.currentImage.data;

        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.leftButton.addEventListener('click', this.slide.bind(this));
        this.rightButton.addEventListener('click', this.slide.bind(this));
        
        this.init();
    }

    // initiation 
    init() {
        this.update(this.currentIndex);
    }

    // when clicking the button
    slide(e) {
        let direction = e.target.classList[0] === 'right-button' 
                        ? 1
                        : -1;
        this.update(this.currentIndex, direction);
    }

    // update the component
    update(currentIndex, direction = 0) {
        // find the newIndex
        let newIndex = currentIndex + direction 
        // ensure newIndex is between 0 to this.imageList.length
        if (newIndex < 0) {
            newIndex = this.imageList.length + newIndex;
        }

        if (newIndex > this.imageList.length - 1) {
            newIndex = 0;
        }
        
        // update the parent component
        this.currentIndex = newIndex;
        this.currentImage = this.imageList[newIndex];

        // DOM
        this.imageList.forEach( function(imageList) {
            if (imageList.data === newIndex) {
                imageList.element.style.display = 'block';
            } else {
                imageList.element.style.display = 'none';
            }
        });
    }
}

// Pure component
class ImageList {
    constructor(imageComponent, parent) {
        this.element = imageComponent;
        this.data = Number(this.element.dataset.slide);
        
        this.parent = parent; // useless for now
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map( carousel => new Carousel(carousel) );
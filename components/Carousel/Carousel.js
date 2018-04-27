class CarouselButton {
    constructor(element, side, parent) {
        this.element = element
        this.parent = parent
        this.element.addEventListener('click', (el) => {
            if ( side === 'right') {
                parent.slideRight()
            } else {
                parent.slideLeft()
            }
        })
    }
}

class Carousel {
    constructor(element) {
        this.element = element;

        this.imgList = document.getElementsByClassName('carousel')[0].getElementsByTagName('img');

        this.rightButton = document.getElementsByClassName('right-button')[0]
        this.rightButton = new CarouselButton(this.rightButton, 'right', this)

        this.leftButton = document.getElementsByClassName('left-button')[0]
        this.leftButton = new CarouselButton(this.leftButton, 'left', this)

        this.currentImgIndex = 0
        this.init()
    }

    init() {
        this.imgList[this.currentImgIndex].style.display = 'block'
    }

    slideRight() {
        this.imgList[this.currentImgIndex].style.display = 'none'
        this.currentImgIndex++
        // End of img list, reset to 0
        if (this.currentImgIndex === this.imgList.length) {
            this.currentImgIndex = 0
        }
        $(this.imgList[this.currentImgIndex]).fadeIn();
    }

    slideLeft() {
        this.imgList[this.currentImgIndex].style.display = 'none'
        this.currentImgIndex--
        // End of img list, reset to last img item in the img list
        if (this.currentImgIndex < 0) {
            this.currentImgIndex = this.imgList.length-1
        }
        
        $(this.imgList[this.currentImgIndex]).fadeIn();
    }
}

let carousel = $('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
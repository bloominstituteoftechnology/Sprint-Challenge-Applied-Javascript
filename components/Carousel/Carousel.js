class Carousel {
    constructor (element){
        this.element = element
        this.img = [...document.querySelectorAll('.carousel img')]
            .map(img => new CarouselImg(img))
        this.rightButton = document.querySelector('.right-button').addEventListener('click', () => this.nextImg('next'))
        this.leftButton = document.querySelector('.left-button').addEventListener('click', () => this.nextImg('previous'))
        this.selection = this.img.findIndex(item => item.element.classList.contains('active-img'))
        this.nextValue()
        console.log(this.selection)
    }
    nextImg(flow){
        if (flow === 'next'){
            this.img[this.selection].element.classList.remove('active-img')
            this.img[this.next].element.classList.remove('next-img')
            this.img[this.next].element.classList.add('active-img')
            this.selection = this.next
            this.nextValue()

            this.img[this.next].element.classList.add('next-img')
        } else if (flow === 'previous'){
            this.img[this.selection].element.classList.remove('active-img')
            this.img[this.next].element.classList.remove('next-item')
            this.img[this.selection].element.classList.add('next-img')
            this.selection = (this.selection === 0) ? this.img.length - 1 : this.selection - 1;
            this.img[this.selection].element.classList.add('active-img')
            this.nextValue()
        }

    }
    nextValue(){
        this.next = (this.slection + this.img.length - 1) ? 0 : this.slection + 1;
    }
}

class CarouselImg {
    constructor(element) {
        this.element = element;
    }
}

class CarouselButton {
    constructor(element) {
        this.element= element;
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
let activeImg = document.querySelector('.active-img').style.display = 'flex'

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

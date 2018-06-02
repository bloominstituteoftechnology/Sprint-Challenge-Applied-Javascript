//First Objective get 1 image to appear only
//Second Objective get the image to show and dissapear
//Third Objective get the buttons to output to the console of left and right
class Carousel {
    constructor(element) {
        this.element = element;
        
        this.images = this.element.querySelectorAll('img');
        this.images.forEach((image, i) => {
            image.setAttribute('data-image', `${i+1}`);
        });
        this.images = Array.from(this.images).map(image => new Image(image));

        //Set the first image to be active
        this.activeImage = this.images[0];
        this.init();

        //The left and right button has the .btn class
        this.buttons = this.element.querySelectorAll('.btn');
        this.buttons = Array.from(this.buttons).map(button => new Button(button, this));
    }
    init() {
        this.activeImage.show();
    }
    getPreviousImage(data) {
        
        this.activeImage.hide();
        let lastIndex = this.images.length - 1;
        if(data < 0) {
            data = lastIndex;
        }
        this.activeImage = this.images[data];
        if(this.images[data] === undefined) {
            
            this.activeImage = this.images[lastIndex];
            
            this.activeImage.show();
           
            return data;
        }
        
        this.activeImage.show();
        return data -= 1;
    }
    getNextImage(data) {
        this.activeImage.hide();
        this.activeImage = this.images[data];
        if(this.images[data] === undefined) {
            this.activeImage = this.images[0];
            data = 1;
            this.activeImage.show();
            return data;
        }
        this.activeImage.show();
        return data += 1;
    }
}

class Button {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
            if (this.element.classList.contains('left-button')) {

                this.activeImageData = Number(this.parent.activeImage.element.dataset.image);

                this.element.addEventListener('click', function() {
                    console.log('Left');
                    this.activeImageData = this.parent.getPreviousImage(this.activeImageData);
                    
                }.bind(this));
            } // End of left button

            if (this.element.classList.contains('right-button')) {
                
                this.activeImageData = Number(this.parent.activeImage.element.dataset.image);
                
                this.element.addEventListener('click', function () {
                    
                    this.activeImageData = this.parent.getNextImage(this.activeImageData);

                }.bind(this));
            } //End of right button
        }
    }


class Image {
    constructor(element) {
        this.element = element;
    }
    show() {
        this.element.style.display = 'block';
    }
    hide() {
        this.element.style.display = 'none';
    }
}
let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
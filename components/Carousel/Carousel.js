class CarouselButton {
    constructor($button, parent) {
        console.log('Hello from CarouselButton constructor');
        this.element = $button;
        this.parent = parent;
        this.side = $button.data('side');
        /** Event Listeners */
        this.element.on('click', this.onClick.bind(this));
    }
    onClick(){
        console.log('Hello from onClick()');
        this.side === "L" ? this.parent.changeImg(-1) : this.parent.changeImg(1);
    }
}
class Carousel {
    constructor ($element) {
        console.log('Hello from Carousel constructor');
        this.element = $element;

        /** deailing with images */
        this.imgs = $element.find('img');
        this.imgs = this.imgs.map( (i, img) => $(img) );
        this.imgsLength = this.imgs.length;
        // console.log('this.imgsLength',this.imgsLength)
        // console.log(this.imgs);

        /** Setting up the first image to fbe displayed */
        this.current = this.imgs[0];
        this.current.addClass('showImg');
        this.current.animate( {width: '100%'}, 500 );
        // console.log('this.current',this.current);

        /** Dealing with butons */
        this.buttons = $element.find('.button');
        this.buttons = this.buttons.map( (i, button) => new CarouselButton($(button), this) );

    }

    /**
     * @function changeImg.
     * @param moveTo -> 1 === moveRigth : -1 === moveLeft
     */
    changeImg( moveTo ){
        console.log('Hello from changeImg()');
        const currentIndex = this.current.data('img') - 1;
        const newIndex = (currentIndex === 0 && moveTo === -1) ? this.imgsLength -1 : ((currentIndex + moveTo) % this.imgsLength);

        /** Remove current image */
        this.current.animate( {width: '1%'}, 500 );
        this.current.removeClass('showImg');
        
        /** Set new current image */
        this.current = this.imgs[newIndex];
        this.current.toggleClass('showImg');
        /** Animate Image */
        this.current.animate( {width: '100%'}, 500 );

        /** Display new current img */
        this.current.addClass('showImg');
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
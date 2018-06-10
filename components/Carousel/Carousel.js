/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/


class Carousel {
    constructor(carousel) {
        this.element = carousel;
        this.images = document.querySelectorAll('.carousel-img');
        this.images = Array.from(this.images).map( (img) => new CrslImg(img, this));
        this.links = document.querySelectorAll('.crsl-button');
        this.links = Array.from(this.links).map( (link) => new Link(link, this) );

        this.activeImage = this.images[1];
    }
    updateActive(newCrslImg) {
        this.activeImage.deselect();
        this.activeImage = newCrslImg;
        this.activeImage.select();
    }

    processLinkClick(link) {
        let buttonType = link.element.dataset.direction;

        if (buttonType === "left") {
            this.images.unshift(this.images[this.images.length - 1]);
            this.images[1].element.before(this.images[0].element);
            this.images.pop();

            } else {
            this.images.push(this.images[0]);
            this.images[this.images.length-2].element.after(this.images[this.images.length-1].element);
            this.images.shift();
        }
        
        this.updateActive(this.images[1]);
    }

    init() {
        this.images.forEach(function (img) {
            img.deselect();
        });
        this.activeImage.select();

    }
}


class CrslImg {
    constructor(img, parent) {
        this.element = img;
        this.parent = parent;
    }

    select() {
        this.element.classList.add("selected");
    }

    deselect() {
        this.element.classList.remove("selected");
    }
}

class Link {
    constructor(link, parent) {
        this.element = link;
        this.parent = parent;
        this.element.addEventListener("click", this.linkClick.bind(this));
    }
    linkClick() {
        this.parent.processLinkClick(this);
    }
}


let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(function makeCarousel (carousel) {
    return new Carousel(carousel);
});

carousels.forEach(function(crsl) {
    crsl.init();
});
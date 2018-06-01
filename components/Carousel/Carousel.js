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

        this.activeImage = this.images[0];
    }
    updateActive(newCrslImg) {
        this.activeImage.deselect();
        this.activeImage = newCrslImg;
        this.activeImage.select();
    }

    processLinkClick(link) {
        let buttonType = link.element.dataset.direction;
        let imageTotal = this.images.length
        let newIndex;
        let activeIndex = this.images.indexOf(this.activeImage);

        if (buttonType === "left") {
            newIndex = activeIndex - 1;
            if (newIndex < 0) {
                newIndex = imageTotal + newIndex;
            }
        } else {
            newIndex = (activeIndex + 1) % imageTotal;
        }
        this.updateActive(this.images[newIndex]);
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
        this.element.style.display = null;
    }

    deselect() {
        this.element.style.display = "none";
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
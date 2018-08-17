class CarouselImage {
    constructor(image) {
      this.image = image;
    };
};

class Carousel {
    constructor(props) {
        this.element = props;
        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");
        this.leftButton.addEventListener("click", () => this.select(this.leftButton.innerText));
        this.rightButton.addEventListener("click", () => this.select(this.rightButton.innerText));
    }
    
    // methods
    findDisplayBlock(item) {
        return item.image.style.display === "block";
    }

    select(innerText) {
        let indexOfBlockImage = images.findIndex(this.findDisplayBlock);
        
        for (let i = 0; i < images.length; i++) {
            images[i].image.style.display = "none";
        }
        
        if (innerText === "<") {
            if (indexOfBlockImage === images.length - 1) {
                images[0].image.style.display = "block";
                //TweenMax.fromTo(images[0].image, 1, {x: 100, opacity: 0}, {x:0, opacity: 1});
            } else {
                images[indexOfBlockImage + 1].image.style.display = "block";
                //TweenMax.fromTo(images[indexOfBlockImage + 1].image, 1, {x: 100, opacity: 0}, {x:0, opacity: 1});
            }
        } else {
            if (indexOfBlockImage === 0) {
                images[images.length - 1].image.style.display = "block";
                //TweenMax.fromTo(images[images.length - 1].image, 1, {x: -100, opacity: 0}, {x:0, opacity: 1});
            } else {
                images[indexOfBlockImage - 1].image.style.display = "block";
                //TweenMax.fromTo(images[indexOfBlockImage - 1].image, 1, {x: -100, opacity: 0}, {x:0, opacity: 1});
            }
        }
    }
};

let images = document.querySelectorAll(".carousel img");
images = Array.from(images).map(img => new CarouselImage(img));

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

carousel.images[0].style.display = "block";

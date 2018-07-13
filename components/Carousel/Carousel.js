class Carousel {
    constructor(element){
        this.element = element;
        // this.lButton = this.element.querySelectorAll(".left-button");
        // this.rButton = this.element.querySelectorAll(".right-button");
        this.button = this.element.querySelectorAll(".button");
        console.log(this.button)
        this.button = Array.from(this.button).map( img => new Button(img, this));
        console.log(this.button)
        this.activeImg = this.button[0];
        console.log(this.activeImg)
        this.init();
    }

    init(){
        this.activeImg.selectButton();
    }

    updateActive(imgElement){
        this.activeImg.deselectButton();
        this.activeImg = imgElement;
    }
    getImg(data){
        return document.querySelectorAll(`cImg[data-img="${data}]`)
    }
}

class Button {
    constructor(element, parent){
        this.element = element;
        this.parent = parent;
        this.imgs = this.parent.getImg(this.element.dataset.img);
        this.imgs = Array.from(this.imgs).map(element => new Image(element));
        this.element.addEventListener('click', () => {
            this.selectImg();
        });
    }

    selectButton(){
        this.parent.updateActive(this);        
        this.imgs.forEach(img => img.selectImg())
    }

    deselectButton(){       
        this.imgs.forEach(img => img.deselectImg())
    }
}

class Image {
    constructor(element){
        this.element = element;
    }
    selectImg(){
        this.element.style.display = null;
    }
    deselectImg(){
        this.element.style.display = "none";
    }
}

let carousel = document.querySelector(".carousel");
carousel = Array.from(carousel).map(element=> new Carousel(element))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
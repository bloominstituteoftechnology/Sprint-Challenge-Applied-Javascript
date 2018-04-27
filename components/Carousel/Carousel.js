class Carousel {
    constructor(element){
        this.element = $(element);
        this.imgs = this.element.find("img");
        this.imgIndex = 0;
        this.activeImg = this.setActiveImg(this.imgIndex);
        this.activeImg.show();
        this.leftButton = this.element.find(".left-button");
        this.rightButton = this.element.find(".right-button");
        this.leftButton.click(() => this.previousImg());
        this.rightButton.click(() => this.nextImg());
    }
    setActiveImg(img)
    {
        return this.activeImg = $(this.imgs[img]);
    }
    nextImg() {
        this.activeImg.hide();
        this.imgIndex++;
        if(this.imgIndex >= this.imgs.length)
        {
            this.imgIndex = 0;
        }
        this.setActiveImg(this.imgIndex);
        this.activeImg.show();
    }
    previousImg() {
        this.activeImg.hide();
        this.imgIndex--;
        if(this.imgIndex < 0)
        {
            this.imgIndex = this.imgs.length - 1;
        }
        this.setActiveImg(this.imgIndex);
        this.activeImg.show();
    }
}



let carousel = $(".carousel");
carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
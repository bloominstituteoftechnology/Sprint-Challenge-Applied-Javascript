class Carousel {
    constructor(element){
        this.element = element;
        this.left = this.element.querySelector(".left-button");
        this.right = this.element.querySelector(".right-button");
        
        //click handlers for left click and right click
        this.left.addEventListener("click", () => {this.leftClick()
        })
        this.right.addEventListener("click", () => {this.rightClick()
        })


        // Adding images to element -- this is where it seems to break

        this.images = this.element.querySelectorAll("img");
        this.currentImage = 1;
        this.init()
    }


    init() {
        this.images[this.currentImage].style.display = "block";
    }

    // LeftClick Method
    leftClick() {
        if (this.currentImage === 0) return;
        this.images[this.currentImage].style.display = "none"
        this.currentImage = this.currentImage - 1;
        this.images[this.currentImage].style.display = "block"
    }
    // RightClick Method
    rightClick() {
        if (this.currentImage === this.images.length -1) return;
        this.images[this.currentImage].style.display = "none";
        this.currentImage = this.currentImage + 1;
        this.images[this.currentImage].style.display = "block"; 
    }
}


let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);


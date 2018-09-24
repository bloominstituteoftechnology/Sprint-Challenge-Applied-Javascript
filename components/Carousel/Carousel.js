// Carousel display images and rotate them
// use CSS keyframe to animate the rotation of images

class Carousel {
    constructor(element){
        this.element = element;
        this.currentPic = 0;
        this.imgs = this.element.querySelectorAll('img');
        this.maxPicNum = this.imgs.length;
             
        this.element.querySelector('.left-button').addEventListener('click', () => this.leftClicked());
        this.element.querySelector('.right-button').addEventListener('click', () => this.rightClicked());
    }

     rightClicked() {
        let newNum = this.currentPic + 1;
        if (newNum == this.maxPicNum )
            newNum = 0;
        
        this.imgs[this.currentPic].classList = 'slideRightOut';
        this.imgs[newNum].classList = 'slideRightIn';
        this.currentPic = newNum;      
       
      }

    leftClicked(){
        let newNum = this.currentPic - 1;
        if (newNum == -1 )
            newNum = this.maxPicNum - 1;
        this.imgs[this.currentPic].classList = 'slideLeftOut';
        this.imgs[newNum].classList = 'slideLeftIn';
        this.currentPic = newNum;   

      }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);





class CarouselIMG {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.pic;


  }
  goLastPic() {
    
    this.element.classList.remove("current-img");

    if (this.data - 1 === 0) {
      this.lastPicData = 4;
    } else {
      this.lastPicData = this.data - 1;
    }
    this.lastPic = document.querySelector(`[data-pic= '${this.lastPicData}']`);
    this.lastPic.classList.toggle("current-img");
  }
  goNextPic() {

    this.element.classList.toggle("current-img");
    if (Number(this.data) + 1 === 5) {
      this.nextPicData = 1;
    } else {
      this.nextPicData = Number(this.data) + 1;
    }
    this.nextPic = document.querySelector(`[data-pic= '${this.nextPicData}']`);
    this.nextPic.classList.toggle("current-img");
  }
}

class Arrows {
    constructor(element){
        this.element = element;
        this.isLeft = (this.element.classList.contains('left-button'));
        this.element.addEventListener('click', () =>{
            let currentIMG = document.querySelector('.current-img');
            currentIMG = new CarouselIMG(currentIMG)
            if (this.isLeft){
                currentIMG.goLastPic();
            }
            else{
                currentIMG.goNextPic();
            }
        })
    }
    
}

left = document.querySelector(".left-button");
left = new Arrows(left);
right = document.querySelector(".right-button");
right = new Arrows(right);

let carousel = document.querySelectorAll(".carouselIMG");
carousel = Array.from(carousel).map(x => new CarouselIMG(x));



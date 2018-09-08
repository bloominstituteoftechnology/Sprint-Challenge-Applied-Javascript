class Carousel {
    constructor(element){
      this.element = element;
      this.left = element.querySelector('.left-button');
      this.right = element.querySelector('.right-button');      
      this.imgs = element.querySelectorAll('img');
      this.images = Array.from(this.imgs);
      this.images.forEach((img) => {
          img.style.display = 'none';
      })
      this.right.addEventListener('click', () => {this.clickRight()});
      this.left.addEventListener('click', () => {this.clickLeft()});
    }
  
    clickRight(){
      for (let i=0; i < this.images.length; i++) {
        if (this.images[i].style.display === 'block') {
            if (this.images[i+1]) {
                this.images[i].style.display = 'none';
                this.images[++i].style.display = 'block';
            } else {
                this.images[i].style.display = 'none';
                this.images[0].style.display = 'block';
            }
        }
      }
    }

    clickLeft(){
        for (let i=0; i < this.images.length; i++) {
          if (this.images[i].style.display === 'block') {
            if (i > 0) {
                this.images[i].style.display = 'none';
                this.images[i-1].style.display = 'block';
            } else {
                this.images[0].style.display = 'none';
                this.images[3].style.display = 'block';
            }
          }
        }
      }
  }
  

  
  let carousel = document.querySelectorAll('.carousel');
  carousel = Array.from(carousel).map(((carousel) => new Carousel(carousel)));
  document.querySelector('img').style.display = 'block';

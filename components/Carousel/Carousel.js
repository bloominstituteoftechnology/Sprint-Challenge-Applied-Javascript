class Carousel {
  constructor(urls) {
    // Create HTML:
    // create div with class "carousel"
    // create div with class "left-button" and append that to div above.

    /* 
        <div class="carousel">
            <div class="left-button"><</div>

            <img src="./assets/carousel/mountains.jpeg" />
            <img src="./assets/carousel/computer.jpeg" />
            <img src="./assets/carousel/trees.jpeg" />
            <img src="./assets/carousel/turntable.jpeg" />

            <div class="right-button">></div>
        </div>
    */

    const carouselDiv = document.createElement("div");
    carouselDiv.classList.add("carousel");

    const leftButtonDiv = document.createElement("div");
    leftButtonDiv.classList.add("left-button");
    leftButtonDiv.textContent = "<";
    carouselDiv.appendChild(leftButtonDiv);

    urls.forEach(url => {
      const image = document.createElement("img");
      carouselDiv.appendChild(image);
      console.log(url);
      image.src = url;
    });

    const rightButtonDiv = document.createElement("div");
    rightButtonDiv.classList.add("right-button");
    rightButtonDiv.textContent = ">";
    carouselDiv.appendChild(rightButtonDiv);

    this.element = carouselDiv;
    console.log("carousel");

    // Create a current index
    this.currentImageIndex = 0;

    this.images = this.element.querySelectorAll(".carousel img");
    console.log(this.images);

    // display first image as default
    this.images[this.currentImageIndex].style.display = "block";

    // const rightButton = this.element.querySelector(".right-button");
    // console.log(rightButton);
    rightButtonDiv.addEventListener("click", () => this.slideNext());

    // const leftButton = this.element.querySelector(".left-button");
    // console.log(leftButton);
    leftButtonDiv.addEventListener("click", () => this.slideBack());
  }

  slideNext() {
    console.log("slide next clicked");
    this.images[this.currentImageIndex].style.display = "none";
    this.currentImageIndex++;

    // at the end of all images, reset to 0
    if (this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
    }

    this.images[this.currentImageIndex].style.display = "block";
  }

  slideBack() {
    console.log("slide back clicked");
    this.images[this.currentImageIndex].style.display = "none";
    this.currentImageIndex--;

    // if at the first image go to the last image
    if (this.currentImageIndex === -1) {
      this.currentImageIndex = this.images.length - 1;
    }
    this.images[this.currentImageIndex].style.display = "block";
  }
}

const carousel1 = new Carousel([
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]);

document.body.insertBefore(
  carousel1.element,
  document.querySelector(".cards-container")
);
// const carousel2 = new Carousel([
//   "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// ]);

// document.body.appendChild(carousel2.element);

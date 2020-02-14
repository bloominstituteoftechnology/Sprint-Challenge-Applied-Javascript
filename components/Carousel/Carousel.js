/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caraEntry = document.querySelector(".carousel-container");
const makeCarousel = () => {
  let carousel = document.createElement("div");
  let imgCon1 = document.createElement("div");
  let imgCon2 = document.createElement("div");
  let imgCon3 = document.createElement("div");
  let imgCon4 = document.createElement("div");
  carousel.classList.add("owl-carousel");
  imgCon1.innerHTML = "<img src=./assets/carousel/mountains.jpeg>";
  imgCon2.innerHTML = "<img src=./assets/carousel/computer.jpeg>";
  imgCon3.innerHTML = "<img src=./assets/carousel/trees.jpeg>";
  imgCon4.innerHTML = "<img src=./assets/carousel/turntable.jpeg>";

  imgCon1.classList.add("item");
  imgCon2.classList.add("item");
  imgCon3.classList.add("item");
  imgCon4.classList.add("item");

  carousel.append(imgCon1);
  carousel.append(imgCon2);
  carousel.append(imgCon3);
  carousel.append(imgCon4);

  return carousel;
};

caraEntry.append(makeCarousel());

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,

  autoplay: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  nav: true,
  navText: ["<", ">"],

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});



let carousel = document.querySelector(".carousel");
let leftArrow = carousel.querySelector(".left-button");
let rightArrow = carousel.querySelector(".right-button");
let images = carousel.querySelectorAll("img");
let index = 0;

images[index].style.display = "block";

rightArrow.addEventListener("click", () =>{
    //reset conditional
    if(index === 3){
        index = -1;
    }
    index += 1;

    images.forEach(image =>{
        image.style.display = "none";
    });

    images[index].style.display = "block";
});

leftArrow.addEventListener("click", () =>{
    //reset conditional
    if(index === 0){
        index = 3;
    }

    index -= 1;
    images.forEach(image =>{
        image.style.display = "none";
    });

    images[index].style.display = "block";

});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
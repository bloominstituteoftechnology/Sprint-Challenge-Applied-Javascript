/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(imgElement) {
        this.imgElement = imgElement;
        this.panel = this.imgElement.querySelector('.carousel img');
        console.log(this.imgElement);
        console.log(panel);
        console.log(imgElement);

        // I am giving up with 5 minutes left, all day I have not been able to console.log(anything at all). Below was my 5th attempt at a carousel using code I found on web, above was my 6th start. Started the day feeling good, ended with a 
        // meh!!
    }
    //method
}






// class Carousel {
//     //need constructor and properties
//     constructor(imgElement) {
//         this.imgElement = imgElement;
//         this.box = document.querySelector('.carousel');
//         this.next = box.querySelector('.right-button');
//         this.prev = box.querySelector('.left-button');
//         this.items = box.querySelectorAll('.carousel img');
//         this.counter = 0;
//         this.amount = items.length;
//         this.current = items[0];
//         box.classList.add('active');
//     }
//         navigate(direction) {
//             current.classList.remove('current');
//             counter = counter + direction;
//             if (direction === -1 &&
//                 counter < 0) {
//                 counter = amount - 1;
//             }
//             if (direction === 1 &&
//                 !items[counter]) {
//                 counter = 0;
//             }
//             current = items[counter];
//             current.classList.add('current');
//         }
//         next.addEventListener('click', () => {
//             this.navigate(1);
//         });
//         prev.addEventListener('click',() => {
//             navigate(-1);
//         });
//         navigate(0);
//     })();

// going to select all images under .carousel
// let pic = document.querySelectorAll('.carousel .pics');

// create an array from the NodeList so can iterate
// pic = Array.from(pic).map(link => new Carousel (link));
// console.log(pic);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
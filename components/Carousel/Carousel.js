class Carousel {
    constructor(element) {
        // assign this.element to the element reference
        this.element = element;
        console.log(this.element);
        let leftbutton = document.querySelector('.left-button');
        this.leftbutton = leftbutton;
        let rightbutton = document.querySelector('.right-button');
        this.rightbutton = rightbutton;
        let carouselimages = document.querySelectorAll('.carousel img');
        this.carouselimages = carouselimages;
        console.log(this.rightbutton);
        console.log(this.leftbutton);
        console.log(this.carouselimages);
        this.leftbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselClick(event);
        });
        this.rightbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselClick(event);
        });
    }
    CarouselClick(event) {
        console.log('hello you clicked yay!')

        // // Select all elements with the .tab class on them
        // const tabs = document.querySelectorAll('.tab');
        // //console.log(tabs);
        // // Iterate through the NodeList removing the .active-tab class from each element
        // tabs.forEach(link => {
        //   link.classList.remove('active-tab')
        // });

        // // Add a class of ".active-tab" to this.element
        // this.element.classList.add('active-tab');
        // //console.log(this.element);

        // // Select all of the elements with the .card class on them
        // const cards = document.querySelectorAll('.card');
        // // Iterate through the NodeList setting the display style each one to 'none'
        // cards.forEach(card => {
        //   card.style.display = 'none';
        // });
        // // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
        // this.cards.forEach(card => card.selectCard());
    }
}



let carousel = document.querySelectorAll('.carousel');
console.log(carousel);

carousel = Array.from(carousel).map(link => new Carousel(link));
console.log(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


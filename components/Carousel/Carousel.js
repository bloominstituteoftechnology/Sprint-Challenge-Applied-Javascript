//AT FIRST I MESSED UP AND STARTED HERE< BUT NOW...This is just me trying to work out 
//the main problem..NOT STRETCH WORK HERE>> PLEASE IGNORE! 



//class Carousel {
// 	constructor(element) {
// 		this.element = element;
// 		this.data = this.element.dataset.tab;
// 		this.item = document.querySelector(`.cards-container[data-tab="${this.data}"]`);
// 		this.cardItem = new CardItem(this.item);
// 		this.element.addEventListener("click", () => {
// 			this.select();
// 		});
// 	};
// 	select() {
// 		const links = document.querySelectorAll(".tab");
// 		links.forEach( link => {
// 			link.classList.remove("left-button")
// 		});
// 		this.element.classList.add("left-button");
// 		this.cardItem.select();
// 	}
// }

//  class CardItem {
//  	constructor(element) {
//  		this.element = element;
//  	}

//  	select() {
//  		const items = document.querySelectorAll(".card");
//  		items.forEach(item => {
//  			item.classList.remove("right-button")
//  		})
//  		this.element.classList.add("right-button");
//  	}
//  }

// //Start Here
// let carousel = document.querySelectorAll(".tab");
// carousel = Array.from(carousel).map(link => new Carousel(link));

// carousel[0].select();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
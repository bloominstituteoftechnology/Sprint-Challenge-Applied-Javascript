class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element;
    // Get the tab data attribute and save the value here
    this.tabData = element.dataset.tab; 
    // Find all elements with the .card class in index.html that correspond to 
    //the tab data attribute. If the data is 'all' then select all cards 
    //regardless of their data attribute
    if(this.tabData !== 'all'){
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    } else {
      this.cards = document.querySelectorAll('.card') ;
    }

    // Map over the cards array and convert each card element into a new 
    //instance of the TabCard class. Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map( item => new TabCard(item));
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => {this.selectTab()} );
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach( item => item.classList.remove('active-tab'));
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');


    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card') ;
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach( item => item.style.display = 'none');
    // Notice we are looping through the this.cards array and 
    //invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = 'initial';
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  
//Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map( item => new TabLink(item));

//Once you are complete, call the .select method on the first tab

tabs[0].selectTab();

let carousel = document.querySelector('.carousel');


class Carousel {
  constructor(props){
    this.props = props;
    this.leftBtn = this.props.querySelector('.left-button');
    this.rightBtn = this.props.querySelector('.right-button');
    this.imgs = this.props.querySelectorAll('img');
    this.imgs = Array.from(this.imgs).map( item => new CarouselImage(item));
    this.currentPlace = 0;
    /* this.imgs[this.currentPlace].showImg() */;


    this.leftBtn.addEventListener('click', () => {
      this.rotateLeft
    });

    this.rightBtn.addEventListener('click', () => {
      this.rotateRight()
    })

  }

  rotateLeft(){
     if(this.currentPlace !== 0){
        this.imgs[this.currentPlace].hideImg();
        this.currentPlace -= 1;
      }
  }

  rotateRight(){
    if(this.currentPlace <= this.imgs.length) {
      this.imgs[this.currentPlace].hideImg();
      this.currentPlace += 1;
    }
  }
}



class CarouselImage {
  constructor(image){
    this.image = image;
    this.order = this.image.dataset.order;
    this.image.style.display = "initial";
    }

  showImg(){
    this.image.style.display = "initial";
   
  }
  hideImg(){
    this.image.style.display = "none";
  }
}

carousel = new Carousel(carousel);
class TabLink {
  constructor(element){
    // assign this.element to the element reference
    
    this.element = element;
    // Get the tab data attribute and save the value here
    
    this.tabData = this.element.dataset.tab; 
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    // this.cards = document.querySelector(`.card[class="${this.tabData}"]`);
    
    // let cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);

    if(this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }
    console.log(this.cards);
    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    // let cards = document.querySelector('.card');
    
    this.cards = Array.from(this.cards).map( card => new TabCard(card)); 
    console.log(this.cards);
    // Add a click event that invokes selectTab
    
    this.element.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const newEl = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    newEl.forEach(tab => {tab.classList.remove('active-tab')});
    
    // Add a class of ".active-tab" to this.element
    
    this.element.classList.add('active-tab');


    //Select all of the elements with the .card class on them
    const newEl2 = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    newEl2.forEach(card => card.style.display = 'none');

    ///I am introducing a display of none but do not handle the .card selector after that
    //I think that I need to do something with that to intro a new display to remaining
    // this.element.style.display = 'flex';

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    
    this.cards.forEach(card => card.selectCard());
   console.log(this.cards);
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = null;
  }

}

//Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
//Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new TabLink(tab))

//Once you are complete, call the .select method on the first tab
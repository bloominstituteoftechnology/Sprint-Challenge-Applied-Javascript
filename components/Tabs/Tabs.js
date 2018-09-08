class TabLink {
  constructor(tab){
    // assign this.element to the element reference
    this.tab = tab;
    // Get the tab data attribute and save the value here
    this.tabData = this.tab.dataset.tab; 

    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    if(this.tabData){
      this.cards = document.querySelectorAll('.card') ;
    } else {
      this.cards = document.querySelector(`.card[data-tab="${this.tabData}"]`) ;
    }


    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map((card) => new TabCard(card));
    // Add a click event that invokes selectTab
    this.tab.addEventListener('click', (e) => {
      this.selectTab()

    })
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    Array.from(tabs).map(tab => tab.classList.remove('active-tab'));
   
    // Add a class of ".active-tab" to this.element
    this.tab.classList.toggle('active-tab');


    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    Array.from(cards).map(card => card.style = 'none');
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(card){
    // Assign this.element to the passed in element.
    this.card = card;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.card.stye = null;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map((tab) => new TabLink(tab));

//Once you are complete, call the .select method on the first tab
// tabs[0].select();
class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element;
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab; 
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    if(){
      this.cards = ;
    } else {
      this.cards = ;
    }

    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => { this.selectTab();
    });
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach()
    // Add a class of ".active-tab" to this.element
    this.element;


    // Select all of the elements with the .card class on them
    const cards = ;
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach()
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = tabs;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map()

//Once you are complete, call the .select method on the first tab
cards[0].selectCard();
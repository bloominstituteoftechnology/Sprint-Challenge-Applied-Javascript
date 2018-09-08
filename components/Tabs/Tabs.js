class TabLink {
  constructor(tab){
    // assign this.element to the element reference
    this.element = tab ;
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab; 
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    if(this !== this.tabData){
      this.cards = this.cards ;
    } else {
      this.cards = this.cards.dataset.tab ;
    }
console.log(this.cards)
    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(cards => new TabCard(cards));
    // Add a click event that invokes selectTab
    this.cards.addEventListener('click', this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function (){
      this.tabs.classList.remove('active-tab');
    })
    // Add a class of ".active-tab" to this.element
    this.tabs.classList.add('active-tab');


    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card') ;
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function (){
      this.cards.style.display = 'none';
    })
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
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
    this.element.style.display = 'null';
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tabs => new TabLink(tabs));

//Once you are complete, call the .select method on the first tab
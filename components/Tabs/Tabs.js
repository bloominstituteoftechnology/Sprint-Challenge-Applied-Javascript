// assign this.tabElement to the tabElement DOM reference
// Get the `data-tab` value from this.tabElement and store it here


class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    
      
    
// We need to find out if a user clicked 'all' cards or a specific category.  
    //Follow the instructions below to accomplish this task:  

// Check to see if this.tabData is equal to 'all'
// If `all` is true, select all cards regardless of their data attribute values
// else if `all` is false, only select the cards with matching this.tabData values
    
    if(this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }
    

// Map over the newly converted NodeList we just created in our if statement above. 
//Convert each this.cards element into a new instance of the TabCard class. 
//Pass in a card object to the TabCard class. 
// Add a click event that invokes this.selectTab

    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener('click', () => this.selectTab());
    };

  

// Select all elements with the .tab class on them
// Iterate through the NodeList removing the .active-tab class from each element 
// Select all of the elements with the .card class on them
// Iterate through the NodeList setting the display style each one to 'none'
// Add a class of ".active-tab" to this.tabElement
  selectTab(){ 
    const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active-tab'));

    const cards = document.querySelectoryAll('.card');
      cards.forEach(card => card.style.display = 'none'));
      
      this.tabElement.classList.add('active-tab');
  
// Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. 
//Just un-comment the code and study what is happening here.
    
    this.cards.forEach(card => card.selectCard());
  }
}


// Assign this.cardElement to the cardElement DOM reference
// Update the style of this.cardElement to display = "flex"

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.style.display = 'flex';
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable 
  to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));
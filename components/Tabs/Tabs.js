class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(this.tabElement);

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    // console.log("tabdata", this.tabData);

    // We need to find out if a user clicked 'all' cards or a specific category.  
    // Follow the instructions below to accomplish this task:    
    // Check to see if this.tabData is equal to 'all'
    if (this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
      // console.log(this.cards);

    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelector(`.card[data-tab='${this.tabData}']`);
      console.log(this.cards);
    }


     // Map over the newly converted NodeList we just created in our if statement above. 
    //  Convert each this.cards element into a new instance of the TabCard class. 
    // Pass in a card object to the TabCard class. 

    // this.cards = Array.from(this.cards).map();
    this.cards = Array.from(this.cards).map(myCard => new TabCard(myCard));
    // console.log(this.cards);

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {this.selectTab()});
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // console.log(tabs);
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(myTab) {myTab.classList.remove("active-tab")});

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // console.log(cards);

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(myTab) {myTab.classList.display = "none";})
    // console.log(cards)
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
    // console.log(this.tabElement);
  
    // Notice we are looping through the this.cards array and invoking selectCard() 
    // from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    // console.log(this.cardElement);
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
    // console.log(this.cardElement);
  }

}

// First step! Create a reference to all ".tab" classes.
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  
// Pass in the tab object to the Tabs class.  
// After you finish this line of code, it's time to build out your TabLink 
// class at the top of the page!

tabs = Array.from(tabs).map(tab => new TabLink(tab))
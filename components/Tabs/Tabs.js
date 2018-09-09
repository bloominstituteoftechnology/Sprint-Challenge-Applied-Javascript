class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element;
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab ; 
    
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    if(this.tabData === "all"){
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }
   // console.log(this.cards);
    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
  this.cards = Array.from(this.cards).map(card => new TabCard(card));
    // Add a click event that invokes selectTab
    // console.log(this.cards);
    this.element.addEventListener('click', () => {this.selectTab()});
    // console.log(this.cards);
   
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(tab){
        return tab.classList.remove('active-tab');
    })
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');


    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card') ;
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card){
        return card.style.display = 'none';
    })
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
     console.log('working');
  }

}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = "block";
    console.log('yes working');
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new TabLink(tab));

//Once you are complete, call the .select method on the first tab
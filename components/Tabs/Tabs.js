class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element;
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab;

    console.log(this.tabData);
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    let cards = document.querySelectorAll(".card");
    //
    if(this[data-tab] === 'all'){
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(this.data-tab) ;
    }
console.log(this.cards);
    // Map over the cards array and convert each card element into a new instance of the TabCard class.
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(cards).map(card => new TabCard(card));
    // Add a click event that invokes selectTab
    this.element.addEventListener("click", () =>{this.selectTab();});
  }

  selectTab(){
console.log("I was clicked!")
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tabs');
    console.log(tabs);
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove("active-tab"))
    // Add a class of ".active-tab" to this.element
    this.element = this.element.classList.add("active-tab");


    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.cards');
    // Iterate through the NodeList setting the display style each one to 'none'
console.log(cards);
    Array.from(cards).forEach(card => card.style.display = 'none');
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
    this.element = this.element.style.display =  null;
    console.log("I was clicked!")
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tabs');
console.log(tabs);
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.

tabs = Array.from(tabs).map( tab => new TabLink(tab));
console.log(tabs);


//Once you are complete, call the .select method on the first tab

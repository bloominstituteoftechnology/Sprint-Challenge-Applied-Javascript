class TabLink {
  constructor(tab) {
    // assign this.element to the element reference
    this.element = tab; // this is correct
    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab
    // console.log('tabData: ', this.tabData)  // this is correct
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // this.cards = document.querySelectorAll('.card')
    // If the data is 'all' then select all cards regardless of their data attribute
    //^^ Didn't realize these were two sets of instructions. Thought they were both cases meant to be used for the following

    // this.cards = document.querySelector(`.card[data-tab="${this.tabData}"]`);
    // 
    // if/else statement. Going to try and work from here to get things figured out.
    if (this.tabData !== "all") {

      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);

      // console.log('this.cards 1: ', this.cards);
    } else {
      this.cards = document.querySelectorAll('.card');
      // console.log('this.cards 2:',this.cards)
    }

    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new TabCard(card)); // 
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => {

      this.selectTab()
    })
    // console.log('this')
  }

  selectTab() {


    // Select all elements with the .tab class on them
    let newTabs = Array.from(document.querySelectorAll('.tab'));
    // console.log(newTabs)
    // Iterate through the NodeList removing the .active-tab class from each element
    newTabs.forEach(tab => {
      tab.classList.remove('active-tab')
    })
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');
    // console.log(this.element)


    // Select all of the elements with the .card class on them
    let cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function (card) {
      card.style.display = 'none';
    })
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard()); // this is correct
  }
}

class TabCard {
  constructor(element) {
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectCard() {
    // Update the style of this.element to display = null
    this.element.style.display = null;
  }

}

// Create a reference to all ".tab" classes
// let tabs = document.querySelectorAll('.tab'); // this is correct
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
let tabs = Array.from(document.querySelectorAll('.tab')).map(tab => new TabLink(tab)); // this is correct
// !!!! ^ The fact that this works is downright ridiculous.
// console.log('this is: ', tabs)
// console.log(tabs)
//Once you are complete, call the .select method on the first tab 
tabs[0].selectTab();
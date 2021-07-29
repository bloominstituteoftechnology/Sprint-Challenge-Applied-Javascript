class TabLink{
    constructor(link){
        this.link = link;
        this.linkData = this.link.dataset.tab;

        if (this.linkData === 'all') {
            this.card = document.querySelectorAll('.card');
        } else {
            this.card = document.querySelectorAll(`.card[data-tab="${this.linkData}"]`);
        }
        this.all = document.querySelectorAll('.card')
        this.card.forEach(card => new TabCard(card));
        this.link.addEventListener('click', () => {this.selectLink()});
    }
    selectLink() {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active-tab'));
        this.link.classList.toggle('active-tab');
        this.all.forEach(card => card.style.display = 'none')
        this.card.forEach(card => card.style.display = 'flex')
    }
}

class TabCard{
    constructor(card) {
        this.card = card;
        this.card.style.display = 'none';
    }
}

document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));
















//==============================================================
/*

class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab;
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
      // Check to see if this.tabData is equal to 'all'
      if(this.tabData === 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll('.cards');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(this.tabElement)
      }
    
      this.cards.forEach(card => new TabCard(card))
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      // this.cards = Array.from(this.cards).map();
  
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => {this.selectTab()});
    }
  
    selectTab(){
        console.log('worker')
      // Select all elements with the .tab class on them
      // const tabs = document.querySelectorAll();
      
      // Iterate through the NodeList removing the .active-tab class from each element
      // tabs.forEach()
  
      // Select all of the elements with the .card class on them
      // const cards = ;
  
      // Iterate through the NodeList setting the display style each one to 'none'
      // cards.forEach()
      
      // Add a class of ".active-tab" to this.tabElement
      // this.tabElement;
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      // this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      // this.cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      // this.cardElement;
    }
  
  }
  
  // First step! Create a reference to all ".tab" classes.
  // let tabs = document.querySelectorAll();
  
  // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
  // tabs = Array.from(tabs).map()

*/
//==============================================================
    // assign this.element to the element reference
    // Get the tab data attribute and save the value here
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    // Map over the cards array and convert each card element into a new instance of the TabCard class.
    // Pass in the card object to the TabCard class.
    // Add a click event that invokes selectTab




    // Select all elements with the .tab class on them
    // Iterate through the NodeList removing the .active-tab class from each element
    // Add a class of ".active-tab" to this.element


    // Select all of the elements with the .card class on them
    // Iterate through the NodeList setting the display style each one to 'none'
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here

//===============tabcard=================
    // Assign this.element to the passed in element.
    // Update the style of this.element to display = null


// Create a reference to all ".tab" classes
//let tabs = document.querySelectorAll();
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.

//Once you are complete, call the .select method on the first tab















// class TabLink {
//   constructor(element){
//     // assign this.element to the element reference
//     this.element = element;
//     // Get the tab data attribute and save the value here
//     this.tabData = this.element.dataset.tab;
//     // Find all elements with the .card class in index.html that correspond to the tab data attribute
//     // If the data is 'all' then select all cards regardless of their data attribute
//     if(this.tabData === 'all'){
//       this.cards = document.querySelectorAll('.card');
//     } else {
//       this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
//     }

//     // Map over the cards array and convert each card element into a new instance of the TabCard class.
//     // Pass in the card object to the TabCard class.
//     this.cards = Array.from(this.cards).map(card => new TabCard(card));
//     // Add a click event that invokes selectTab
//     this.element.addEventListener('click', () => {this.selectTab();
//     });
//   }

//   selectTab(){

//     // Select all elements with the .tab class on them
//     const tabs = document.querySelectorAll('.tab');
//     // Iterate through the NodeList removing the .active-tab class from each element
//     tabs.forEach(tab => tab.classList.remove('active-tab'));
//     // Add a class of ".active-tab" to this.element
//     this.element.classList.add('active-tab');


//     // Select all of the elements with the .card class on them
//     const cards = document.querySelectorAll('.card');
//     // Iterate through the NodeList setting the display style each one to 'none'
//     cards.forEach(card => card.style.display = 'none')
//     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
//     this.cards.forEach(card => card.selectCard());
//   }
// }

// class TabCard {
//   constructor(element){
//     // Assign this.element to the passed in element.
//     this.element = element;
//   }
//   selectCard(){
//     // Update the style of this.element to display = null
//     this.element.style.display = null;
//   }

// }

// // Create a reference to all ".tab" classes
// //let tabs = document.querySelectorAll();
// // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
//  let tabs = document.querySelectorAll('.tab');
//  tabs = Array.from(tabs).map(tab => new TabLink(tab));

// //Once you are complete, call the .select method on the first tab

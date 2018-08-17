class TabLink {
  constructor(tabLinks){
    // assign this.element to the element reference
    this.element = tabLinks;

    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab; 
    
    // Find all elements with the .card class in index.html that correspond to the tab data attribute
    // If the data is 'all' then select all cards regardless of their data attribute
    // if(this.element){
    //   this.cards = ;
    // } else {
    //   this.cards = ;
    // }

    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.

    //this.cards = Array.from(this.cards).map(tabCards => new TabCard(tabCards));

    // Add a click event that invokes selectTab
    //this.element.addEventListener();

    //this.element.addEventListener('click', () => { this.selectTab() });
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
   
    // Iterate through the NodeList removing the .active-tab class from each element

    //Use for Nodelist
    //tabs.forEach((e) => { e.classList.remove('.active-tab');

    // });

    //Use if convert to array before removing the .active class from each element
    Array.from(tabs).forEach((e) => { e.classList.remove('active-tab');

     });
    // Add a class of ".active-tab" to this.element
    // this.element;
    this.element.classList.add('active-tab');


    // Select all of the elements with the .card class on them
    // const cards = ;
    const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    //cards.forEach()

     //Use for Nodelist
    // cards.forEach((e) => { e.style.flex = none;

    // });
    // cards.forEach(
    //   functiion(e) {
    //     cards.style.flex = none;
    //   }
    // );

    //Use if convert to array before setting the display style each one to 'none'
    Array.from(cards).forEach(functiion(e) {
      cards.style.flex = none;
    });
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(tabCards){
    // Assign this.element to the passed in element.
    this.element = tabCards;
  }
  selectCard(){
    // Update the style of this.element to display = null
    this.element.style.display = null;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tabLinks => new TabLink(tabLinks));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();
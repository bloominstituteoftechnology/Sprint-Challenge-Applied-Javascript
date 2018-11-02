class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
     this.tabElement = tabElement; // setting the this. to the tabElement
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; // so we can access the dataset or data-tab
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // we are saying if the .tabs data-tab and the .card both are "all" then select
      // If `all` is true, select all cards regardless of their data attribute values
       this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      // we are saying that if the .card class data-tab matches the .tabs data-tab then select the matching
       this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`); 
    }
    

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
     //We convert this to an array so that we can use methods and by using => function it passes the this. through 
     this.cards = Array.from(this.cards).map(cardLink => new TabCard(cardLink));

    // Add a click event that invokes this.selectTab
    // again using the arrow function to pass the this, we could have used .bind instead
     this.tabElement.addEventListener('click', () => {
       this.selectTab();
     });
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // create a variable and use querySelectorAll to get .tab
     const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // since we are using classList, it knows we will be doing something to a class and do not need to use '.'
     tabs.forEach( tab => {
       tab.classList.remove('active-tab'); // **removed dot from class since we are using classList**
     })

    // Select all of the elements with the .card class on them
    //create a variable and use querySelectorAll on .card
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    // can use a forEach to loop through NodeList and directly change the style display 
    cards.forEach(card => {
      card.style.display = 'none';
    })
    
    // Add a class of ".active-tab" to this.tabElement
    // classList knows we are talking about a class so the '.' is not needed and will break the code if used
    this.tabElement.classList.add('active-tab'); //  *** again removed dot from active-tab since this is classList.
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    //using a forEach to iterate then pass the this. using arrow function to the selectCard method in TabCard class
     this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    //setting the this. 
     this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    //creating a method to change the style and display 
    this.cardElement.style.display = 'flex';
  }

}

//  First step! Create a reference to all ".tab" classes.
// this is where the control flow begins above this line are 2 classes so nothing has happened yet
// however classes are not hoisted so they have to be above where this starts. let tabs is a global variable, 
// and starts everything in motion.
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
// now using the assignment operator we are creating an array (from the array like nodes) so that we can use
// methods like map.
tabs = Array.from(tabs).map(link => new TabLink(link));

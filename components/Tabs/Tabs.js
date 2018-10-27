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
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);
    }
    

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
     this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click',()=>this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = 'none');
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => {
      card.selectCard();
      card.closeCard();
    });
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    //adding below for my own stretch.. adding content to cards to unhide when clicked
    this.cardContent = this.cardElement.querySelector('p');

    // below was being added twice for each card... b/c of the structure of 'all' tab
    // this.cardElement.addEventListener('click',(event)=>{
    //   event.preventDefault();
    //   event.stopPropagation();
    //   console.log('a card was clicked');
    //   this.openCard();
      
    //})
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }
  // openCard(){
  //   this.cardContent.classList.add('notHidden');
  //   this.cardElement.classList.add('expanded');
  // }
  closeCard(){
    this.cardContent.classList.remove('notHidden');
    this.cardElement.classList.remove('expanded');
  }
  // toggleCard(){
  //   this.cardContent.classList.toggle('notHidden');
  //   this.cardElement.classList.toggle('expanded');
  // }
}

// First step! Create a reference to all ".tab" classes.
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
tabs = Array.from(tabs).map(tab => new TabLink(tab));

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click',(event)=> {
    event.currentTarget.querySelector('p').classList.toggle('notHidden');
    event.currentTarget.classList.toggle('expanded');
  })
})
class TabLink {
  constructor(element){

    this.element = element;
  
    this.tabData = this.element.dataset.tab; 
    console.log(this.tabData);
    
    this.itemElement = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    
    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = this.itemElement;
    }

    this.cards = Array.from(this.cards).map(element => new TabCard(element));
    this.element.addEventListener('click', () => {
      this.selectTab();
    });
  };

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    Array.from(tabs).forEach(function(item){
      item.classList.remove("active-tab");
    })
    // Add a class of ".active-tab" to this.element
    
    this.element.classList.add('active-tab');
    

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    Array.from(cards).forEach(function(item){
      item.style.display = "none";
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
    this.element.style.display = "block"
    
    
    
    
  }

  

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(element => new TabLink(element));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();
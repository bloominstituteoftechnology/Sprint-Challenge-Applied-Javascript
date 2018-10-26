class TabLink {
  constructor(link){
    this.link = link;
  
    this.tabLink = this.link.dataset.tab;
    this.tabData = document.querySelectorAll(`.card[data-tab='${this.tabLink}']`);
   
    if(this.tabLink === 'all'){
      this.tabCard = document.querySelectorAll('.card');
    } else {
      this.tabCard = this.tabData;
    }
      
    // // Map over the cards array and convert each card element into a new instance of the TabCard class. Pass in the card object to the TabCard class.
    this.tabCard = Array.from(this.tabCard).map( tabCard => {
      return new TabCard(tabCard);
      // console.log(this.cards);
    });
    // // Add a click event that invokes selectTab
    this.link.addEventListener('click', () => {this.selectTab()});
  }
  
  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    Array.from(tabs).forEach( link => {link.classList.remove('active-tab')});
    this.link.classList.add('active-tab');
    console.log("active tab working");

    // Select all of the elements with the .card class on them
    // Iterate through the NodeList setting the display style each one to 'none'
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    let tabCard = document.querySelectorAll('.card');
    tabCard.forEach(card=> {card.style.display = 'none'});
    this.tabCard.forEach(card => card.selectCard());
  }
}


class TabCard {
  constructor(tabCard){
    // Assign this.element to the passed in element.
    this.tabCard = tabCard;
  }
  selectCard(){
    this.tabCard.style.display = null;
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll(".tab");
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map( tab => {
  return new TabLink(tab);
})

//Once you are complete, call the .select method on the first tab
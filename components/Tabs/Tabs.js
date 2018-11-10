class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(this.tabElement)

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabElementData = this.tabElement.dataset.tab
    // console.log(this.tabElementData)

    this.tabElementContent = document.querySelector(`.cards-container .card`)

    // console.log(this.tabElementContent)

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    this.tabElement.addEventListener('click', () => {
    // Check to see if this.tabData is equal to 'all'

      if(`${this.tabElementData}` === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll(`.cards-container .card`)
        // console.log(this.cards)
      }

      // else if `all` is false, only select the cards with matching this.tabData values
      else {
        this.cards = document.querySelectorAll(`.cards-container .card[data-tab = '${this.tabElementData}']`)
        // console.log(this.cards)
      }

    this.cards = Array.from(this.cards).map(newCards =>  new TabLink(this.tabElement));

      
      
    // console.log(this.cards)
    })
    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => { this.selectTab() });
  
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // console.log(this.cards)

  }


  selectTab(){

    // Select all elements with the .tab class on them
    // console.log('hi')
    const tabs = document.querySelectorAll('.topics .tab');
    // console.log(tabs)

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach((subList) => {
      subList.classList.remove('active-tab')
      // console.log(tabs)
    })

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card')

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach((x) => {
    //   x.style.display = "none";
    // })
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
    // console.log('hi')

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.

    // for( i=0 ; i<this.cards.length; i++) {
    //   this.cards[i].selectCard();
    // }
    // this.cards.forEach(function(x){
    //   console.log(x)
    // })

    this.cards.forEach(card => card.selectCard() ) ;
  }

  //
}  


class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement
  }

  selectCard(){
    console.log('hi')
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement.style.display = "flex";
  }

}

let tab = document.querySelectorAll(' .topics .tab').forEach(link => new TabLink(link));


// START HERE: 

// - Select all classes named ".tab" and assign that value to the tabs variable

// - With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter



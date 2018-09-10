class TabLink {
  constructor(element){
    // assign this.element to the element reference
    this.element = element; //   = div.tab.activate-tab
    // Get the tab data attribute and save the value here
                                              // this = TabLink
                                              // this.element = div.tab.active-tab
                                              // this.element.dataset = DOMStringMap{tab: "all"}

          //   reads in current data-tab  value
    this.tabData = this.element.dataset.tab;  // = 'all'

    // Find all elements with the .card class in index.html that correspond
    // to the tab data attribute
    //     this.tabData refers to name of current active tab, e.g. this.tabData = "technology"
    // If the data is 'all' then select all cards regardless of their data attribute
    if(this.tabData === 'all'){
  //  if(`${this.tabData}` === 'all'){      // this also works
      this.cards = document.querySelectorAll('.card'); // = NodeList(23)
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab = "${this.tabData}"]`);
    }

    // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(item => new TabCard(item)); // NodeList(23) of div.card
                                                                        //           0 = div.card

    // Add a click event that invokes selectTab
               // this.element  = div.tab.active-tab
    this.element.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');  // = NodeList(9)  0 = div.tab .active.tab
                                                     //                1 = div.tab
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(item => item.classList.remove('active-tab'));  // = NodeList(9)  0 = div.tab
                     // all items only contain  div.tab when done   //                1 = div.tab
    // Add a class of ".active-tab" to this.element
                        // this = TabLink
                        // this.element.classList   DOMTokenList(1)   0 = 'tab'
                        // this.element = div.tab{align: "", title: "", lang: "", translate: true, ...}
    this.element.classList.add('active-tab');  // this.element.classList = DOMTokenList(1)
                                               //                         0 = 'tab', 1 = 'active-tab'

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card'); //  = NodeList(23)
                                                            //    0 = div.card, 1 = div.card, ...

    // Iterate through the NodeList setting the display style each one to 'none'
    // This clears cards and then rebuilds view based on tab selected

    cards.forEach( item => item.style = 'display: none' ); // cards  = NodeList(23)
                                                           // 0 = div.card, 1 = div.card
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class,
    // nothing to update here
              // e.g. this = TabLink{element: ,tabData: "jquery", cards}
              // this.cards  =   an array of TabCard objects
    this.cards.forEach(card => card.selectCard());  // e.g. this = TabLink{element:, tab-data='all', cards}
  }                                                 // this.cards  = array of TabCard instances
}

class TabCard {
  constructor(element){
    // Assign this.element to the passed in element.
                              // this = TabCard(element)
    this.element = element;   //  = div.card{align: "", title: "", lang: "", ...}
  }
  selectCard(){
    // Update the style of this.element to display = null
            // this = TabCard{element}
            // this.element = div.card{align: "", title: "", ...}
            // this.element.style =  CSSStyleDeclaration{0: "display", ....
                   //  display: none;
    this.element.style = 'display: null';  // each card added one at a time positioned with flex
                  //    display: ""
  }

}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');  // = NodeList(9)
                                               // 0 = div.tab.active-tab, 1 = div.tab, 2 = div.tab, ...
// Map over the array and convert each tab reference into a new TabLink object.
// Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(item => new TabLink(item)); // = Array(9)  => TabLink[0]
           // 0 = TabLink{element: , tabData = "all", cards:}
           // 1 = TabLink{element: , tabData = "javascript", cards:}
           //  .... for all tab
//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();   // just sets initial tab to all

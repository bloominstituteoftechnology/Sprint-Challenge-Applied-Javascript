// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

class tablink {
    constructor(element) {
    // assigns this.element to element reference
    this.element.element;
    // gets the tab data attr and saves the value here.
    this.tabData = this.element.dataset.tab;
    // this finds all elements with the .card class in index.html that corrispond to the tab data attr. 
    // if the data is 'all' then select all cards regaurdless of there data attr.
    if (this.this.tabData === 'all') {
    // if all tabs are selected then this grab all cards with .card class.
    this.cards = document.querySelectorAll('.card');
    } else {
    // if any other card is selected then this grabs individual dataSet.
    this.cards = document.querySelectorAll('.card[data-tab = "${this.tabData}"]');
    }

    // this maps over the cards array and converts each card element into a new instance of the TabCard  
    // class and pass in the card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new tabCard(card));
    // adds a click event that invokes selectTab.
    this.element.addEventListener('click', () => {this.selectTab()});
    }

    selectTab() {
    // this selects all elements with the .tab class on them.
    const tabs = document.querySelectorAll('.tab');
    // this itterates through the node list removing the .active-tab class from each element.
    tabs.forEach(tab => {tab.classList.remove('active-tab')});
    // adds a class of '.active-tab' to this.element.
    this,element.classList.add('active-tab');
    // selects all elements with the .card class on them.
    const cards = document.querySelectorAll('.card');
    // itterates through nodeList setting ther display style of each one to 'none'.
    cards.forEach(card => card.getElementsByClassName.display = 'none');
    this.cards.forEach(card => card.selectCard());
    }
}

class tabCard {
    constructor(element) {
    this.element = element;
    }
    selectCard() {
        this.element.style.display = null;
    }
}

    // this creates a reference to all ".tab" classes.
    let tabs = document.querySelectorAll('.tab');
    // maps over the array and converts each tab ref into a new tabLink object.
    tabs = Array.from(tabs).map(tab => new tablink(tab));
    // once complete, this calls the .select method on first tab.
    tabs[0].selectTab();

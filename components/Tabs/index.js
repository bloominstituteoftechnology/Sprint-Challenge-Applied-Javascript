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
    //assigns this.element to element reference
    this.element.element;
    //gets the tab data attr and saves the value here.
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
    

    }
}
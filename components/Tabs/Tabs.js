class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab;

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", e => this.selectTab(e));
  }

  selectTab(e){
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"`);
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove("active-tab"));

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = "none");
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard(e));
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(e){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }
}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

let tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => new TabLink(tab));


// FOR ADDING A NEW ARTICLE
// ========================

const postArticleButton = document.querySelector(".submitArticleBtn");
postArticleButton.addEventListener("click", e => addArticle(e));

function addArticle(e) {
  // Selectors and value assignments
  // -------------------------------

  const cardsArea = document.querySelector(".cards-container");

  const authorField = document.querySelector(".formArticleAuthor");
  const titleField = document.querySelector(".formArticleTitle");
  const topicField = document.querySelector(".formArticleTopicList");
  
  const topicOptions = topicField.querySelectorAll("option");

  const newCardAuthor = authorField.value;
  const newCardTitle = titleField.value;
  const newCardTopic = topicOptions[topicField.selectedIndex].value;

  const activeTab = document.querySelector(".active-tab");

  // Build DOM elements
  // ------------------

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.setAttribute("data-tab", newCardTopic);

  const headlineElement = document.createElement("div");
  headlineElement.classList.add("headline");
  headlineElement.textContent = newCardTitle;

  const authorElement = document.createElement("div");
  authorElement.classList.add("author");

  const imgContainerElement = document.createElement("div");
  imgContainerElement.classList.add("img-container");

  const authorDisplayElement = document.createElement("span");
  authorDisplayElement.textContent = `By ${newCardAuthor}`;

  profileImgElement = document.createElement("img");
  profileImgElement.src = "./assets/anon.png";

  imgContainerElement.appendChild(profileImgElement);

  authorElement.appendChild(imgContainerElement);
  authorElement.appendChild(authorDisplayElement);

  cardElement.appendChild(headlineElement);
  cardElement.appendChild(authorElement);

  cardsArea.appendChild(cardElement);

  console.log("REACHED")

  if (newCardTopic !== activeTab.textContent
      && activeTab.dataset.tab != "all") {
    cardElement.style.display = "none";
    console.log("SLAPPD");
  }

  // Clear all fields
  // ----------------

  authorField.value = "";
  titleField.value = ""
  topicField.selectedIndex = 0;
}
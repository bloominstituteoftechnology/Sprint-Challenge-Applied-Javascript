// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//funtion to create card
function createCard(infoObj){
//create elements
  const newCard = document.createElement('div');
  const newHeadline = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newImageCtn = document.createElement('div');
  const newAuthorImg = document.createElement('img');
  const newAuthorName = document.createElement('span');

//assign classes


//append the elements

}//end createCard()

//get entry point & don't name it entryPoint


//api call


//loop response


//create new card


// append to entry point - which will not be named entryPoint

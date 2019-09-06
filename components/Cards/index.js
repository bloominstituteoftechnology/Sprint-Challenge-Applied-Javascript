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

const cardSection = document.createElement('div')

const bodySection = document.querySelector('body');

bodySection.appendChild(cardSection);

function newCard () {
    const newCard = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardAuthor = document.createElement('span');

    //structure
    newCard.appendChild(cardHeadline);
    newCard.appendChild(authorImgContainer);
    authorImgContainer.appendChild(imgContainer);
    authorImgContainer.appendChild(cardAuthor);
    imgContainer.appendChild(cardImg);

    //classes
    newCard.classList.add('card');
    cardHeadline.classList.add('headline'),
    authorImgContainer.classList.add('author'),
    imgContainer.classList.add('img-container')

    //content


    return newCard;

}

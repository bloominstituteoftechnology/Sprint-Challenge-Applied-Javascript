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

const newCard = (post) => {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    // headlineDiv.textContent =""

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');

    const img = document.createElement('img').src('');

    const spanBy = document.createElement('span');
    spanBy.textContent = "By authors name";

    //img is a child of imgDiv
    imgDiv.appendChild(img);

    //spanBy and imgDiv are the children of authorDiv
    authorDiv.appendChild(spanBy);
    authorDiv.appendChild(imgDiv);

    //authorDiv and headlineDiv are the children of cardDiv
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(headlineDiv);
}

const cards = document.getElementsByClassName('card');
cards.forEach(dataset  => {
  articles.appendChild(newArticle(dataset));
})
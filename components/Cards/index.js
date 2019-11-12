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
//Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    console.log(res);
    let cardsC = document.querySelector('.cards-container');
    let arrayValues = Object.values(res.data.articles);
    arrayValues.forEach(i => {
      i.forEach(e => {
        cardsC.appendChild(cardCreator(e));
      });
    });
  })
  .catch(error => {
    console.log;
  });

function cardCreator(cardData) {
  const cards = document.createElement('div');
  const headlineE = document.createElement('div');
  const authorInfo = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorNames = document.createElement('span');
  //
  cards.classList.add('card');
  headlineE.classList.add('headline');
  imgContainer.classList.add('img-container');
  authorInfo.classList.add('author');
  //
  headlineE.textContent = cardData.headline;
  img.src = cardData.authorPhoto;
  authorNames.textContent = 'By ' + cardData.authorName;
  //
  cards.appendChild(headlineE);
  cards.appendChild(authorInfo);
  authorInfo.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorInfo.appendChild(authorNames);

  return cards;
}

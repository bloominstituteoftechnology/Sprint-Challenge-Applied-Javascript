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
// const cardsContainer = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(respons => {
    const cardsContainer = document.querySelector('.cards-container');
    respons.data.articles.javascript.forEach(item => {
      cardsContainer.appendChild(articleCardCreator(item));
    });
    respons.data.articles.bootstrap.forEach(item => {
      cardsContainer.appendChild(articleCardCreator(item));
    });
    respons.data.articles.technology.forEach(item => {
      cardsContainer.appendChild(articleCardCreator(item));
    });
    respons.data.articles.jquery.forEach(item => {
      cardsContainer.appendChild(articleCardCreator(item));
    });
    respons.data.articles.node.forEach(item => {
      cardsContainer.appendChild(articleCardCreator(item));
    });
  })
  .catch(() => {
    alert('Error Loading Data');
  });

function articleCardCreator(articleCard) {
  const cardArticle = document.createElement('div');
  cardArticle.classList.add('card');

  const headlineArticle = document.createElement('div');
  headlineArticle.classList.add('headline');
  cardArticle.appendChild(headlineArticle);
  headlineArticle.textContent = articleCard.headline;

  const authorArticle = document.createElement('div');
  authorArticle.classList.add('author');
  cardArticle.appendChild(authorArticle);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  cardArticle.appendChild(imgContainer);

  const img = document.createElement('img');
  imgContainer.appendChild(img);
  // imgArticle.setAttribute('src', articleCard.authorPhoto);
  // img.src = articleCard.authorPhoto;

  const authorNameArticle = document.createElement('span');
  cardArticle.appendChild(authorNameArticle);
  authorNameArticle.textContent = `By ${articleCard.authorName}`;

  return cardArticle;
}

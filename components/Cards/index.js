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

const cardsContainer = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        jstrends = response.data.articles.javascript;
        jstrends.forEach((item) => cardsContainer.appendChild(doggieCards(item)));
    })
    .catch((error) => {
        console.log('javascript', error);
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        bootstrapTrends = response.data.articles.bootstrap;
        bootstrapTrends.forEach((item) => cardsContainer.appendChild(doggieCards(item)));
    })
    .catch((error) => {
        console.log('bootstrap', error);
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        techTrends = response.data.articles.technology;
        techTrends.forEach((item) => cardsContainer.appendChild(doggieCards(item)));
    })
    .catch((error) => {
        console.log('technology', error);
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        jqueryTrends = response.data.articles.jquery;
        jqueryTrends.forEach((item) => cardsContainer.appendChild(doggieCards(item)));
    })
    .catch((error) => {
        console.log('jquery', error);
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        nodeTrends = response.data.articles.node;
        nodeTrends.forEach((item) => cardsContainer.appendChild(doggieCards(item)));
    })
    .catch((error) => {
        console.log('node', error);
    })

function doggieCards(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    card.appendChild(headline);
    headline.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    author.appendChild(imageContainer);

    const image = document.createElement('img');
    imageContainer.appendChild(image);

    const byAuthor = document.createElement('span');
    author.appendChild(byAuthor);
    image.src = data.authorPhoto;
    image.textContent = data.image;
    byAuthor.textContent = data.authorName;



    return card;
}
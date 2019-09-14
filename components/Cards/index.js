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

let cardContainer = document.querySelector('.cards-container');

function createCard(arr) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let byline = document.createElement('span');



    imgContainer.appendChild(img);
    author.appendChild(imgContainer);
    author.appendChild(byline);
    card.appendChild(headline);
    card.appendChild(author);
    cardContainer.appendChild(card);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container')

    headline.textContent = arr.headline;
    img.src = arr.authorPhoto
    byline.textContent = `By ${arr.authorName}`

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((result) => {
        console.log(result.data.articles);
        let bootstrap = result.data.articles.bootstrap;
        let javascript = result.data.articles.javascript;
        let jquery = result.data.articles.jquery;
        let node = result.data.articles.node;
        let technology = result.data.articles.technology;

        bootstrap.forEach(item => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        })
        javascript.forEach(item => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        })
        jquery.forEach(item => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        })
        node.forEach(item => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        })
        technology.forEach(item => {
            const newCard = createCard(item);
            cardContainer.appendChild(newCard);
        })
    })
    .catch((err) => {
        console.log(err);
    });
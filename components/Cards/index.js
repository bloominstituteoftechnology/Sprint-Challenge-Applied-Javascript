// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const allCards = document.querySelector('.cards-container');

function cardCreator(arr) {
    const card = document.createElement('div');
    const headline1 = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');

    allCards.appendChild(card);
    card.appendChild(headline1);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(span);
    imageContainer.appendChild(image);

    card.classList.add('card');
    headline1.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    headline1.textContent = arr.headline;
    image.src = arr.authorPhoto;
    span.textContent = `By ${arr.authorName}`;

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        const bootstrap = response.data.articles.bootstrap;
        const javascript = response.data.articles.javascript;
        const jquery = response.data.articles.jquery;
        const node = response.data.articles.node;
        const technology = response.data.articles.technology;
        bootstrap.forEach(item => {
            const newCard = cardCreator(item);
            allCards.appendChild(newCard);
        })
        javascript.forEach(item => {
            const newCard = cardCreator(item);
            allCards.appendChild(newCard);
        })
        jquery.forEach(item => {
            const newCard = cardCreator(item);
            allCards.appendChild(newCard);
        })
        node.forEach(item => {
            const newCard = cardCreator(item);
            allCards.appendChild(newCard);
        })
        technology.forEach(item => {
            const newCard = cardCreator(item);
            allCards.appendChild(newCard);
        })
    })
    .catch(function(error) {
        console.log('There Is An Error');
    })

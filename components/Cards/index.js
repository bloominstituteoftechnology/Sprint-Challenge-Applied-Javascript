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

const cards = document.querySelector('.cards-container');
function cardCreator(e) {

    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = e.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('e.author');
    card.appendChild(author);

    const container = document.createElement('div');
    container.classList.add('img');
    author.appendChild(container);

    const img = document.createElement('img');
    img.src = e
    container.appendChild(img);

    const span = document.createElement('span');
    author.appendChild(span);
    span.text = `By ${author}`

    cards.appendChild(card);

    return card;
}

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response.data.articles);
        let bootstrap = response.data.articles.bootstrap;
        let javascript = response.data.articles.javascript;
        let jquery = response.data.articles.jquery;
        let node = response.data.articles.node;
        let tech = response.data.articles.technology;

        bootstrap.forEach(i => {
            const card = cardCreator(i);
            cards.appendChild(card);
        })
        javascript.forEach(i => {
            const card = cardCreator(i);
            cards.appendChild(card);
        })
        jquery.forEach(i => {
            const card = cardCreator(i);
            cards.appendChild(card);
        })
        node.forEach(i => {
            const card = cardCreator(i);
            cards.appendChild(card);
        })
        tech.forEach(i => {
            const card = cardCreator(i);
            cards.appendChild(card);
        })
    })
console.log(cards)
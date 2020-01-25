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

function articleMaker(obj) {
    const card = document.createElement('div');
    card.classList.add('card');
    const hLine = document.createElement('div');
    hLine.classList.add('headline');
    const author = document.createElement('div');
    author.classList.add('author');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    const by = document.createElement('span');

    card.appendChild(hLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);

    hLine.textContent = obj.headline;
    img.src = obj.authorPhoto;
    by.textContent = obj.authorName;
    
    return card;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')

  .then((info) => {
    const bootstrap = info.data.articles.bootstrap;
    const javascript = info.data.articles.javascript;
    const jquery = info.data.articles.jquery;
    const node = info.data.articles.node;
    const technology = info.data.articles.technology;
    console.log(bootstrap);
    bootstrap.forEach((obj) => {
        const cards = articleMaker(obj);
        cardsContainer.appendChild(cards);
    });
    javascript.forEach((obj) => {
        const cards = articleMaker(obj);
        cardsContainer.appendChild(cards);
    });
    jquery.forEach((obj) => {
        const cards = articleMaker(obj);
        cardsContainer.appendChild(cards);
    });
    node.forEach((obj) => {
        const cards = articleMaker(obj);
        cardsContainer.appendChild(cards);
    });
    technology.forEach((obj) => {
        const cards = articleMaker(obj);
        cardsContainer.appendChild(cards);
    });
    
});
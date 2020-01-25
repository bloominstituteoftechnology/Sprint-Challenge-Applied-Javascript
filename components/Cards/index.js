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

let articleArray = [];
let response = {};
const cardsSection = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        articleArray = response.data.articles.javascript
        console.log(response.data.articles.javascript)
        articleArray.forEach(article => {
            cardsSection.appendChild(createCard(article))
        })
    })
    .catch(error => console.error(error))

const createCard = content => {
    //Create Card
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const container = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span')


    //Add classList
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    container.classList.add('img-container');

    //Add textContent
    headline.textContent = `${content.headline}`;
    name.textContent = `By: ${content.authorName}`;

    //Image source
    img.src = (`${content.authorPhoto}`);

    //Append child
    container.appendChild(img);
    author.appendChild(container);
    author.appendChild(name);
    card.appendChild(headline);
    card.appendChild(author);

    return card;
}
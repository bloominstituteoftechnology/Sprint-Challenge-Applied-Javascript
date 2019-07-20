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
	.then (data => {
        const articlesData = data.data.articles;
        Object.keys(articlesData).forEach(topic => {
            articlesData[topic].forEach(article => {
                cardsContainer.appendChild(cardMaker(article));
            });
});
})
        
.catch(err => {
    console.log('oops!');
})

// Component to generate cards
function cardMaker(article) {

// Create Template
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgCont = document.createElement('div');
const imgUrl = document.createElement('img');
const authName = document.createElement('span');

// Assign Classes
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgCont.classList.add('img-container');

// Assign Values
headline.textContent = `${article.headline}`;
imgUrl.src = `${article.authorPhoto}`;
authName.textContent = `By ${article.authorName}`;

// Assemble Card
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgCont);
imgCont.appendChild(imgUrl);
author.appendChild(authName);

return card;
}
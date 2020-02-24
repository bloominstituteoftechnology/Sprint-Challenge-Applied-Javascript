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




function newArticles(item){



const cards = document.createElement('div');
const headlines = document.createElement('div');
const author = document.createElement('div');
const imageContainer = document.createElement('div');
const img = document.createElement('img');
const authorsName = document.createElement('span');


cards.appendChild(headlines);
cards.appendChild(author);
author.appendChild(imageContainer);
author.appendChild(authorsName);
imageContainer.appendChild(img);


cards.classList.add('card');
headlines.classList.add('headline');
author.classList.add('author');
imageContainer.classList.add('img-container');


headlines.textContent = item.headline;
img.src = item.authorPhoto;
authorsName.textContent = `By: ${item.authorName}`;

// console.log(cards)


return cards
}



const newCards = document.querySelector('.cards-container');

axios 
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res =>{
    console.log(res);
    const cardArray = res.data.articles;
        const one = cardArray.javascript;
        const two = cardArray.bootstrap;
        const three = cardArray.jquery;
        const four = cardArray.node;
        const five = cardArray.technology;
        const allCards = one.concat(two, three, four, five);
        console.log(allCards);
        allCards.forEach(authorCard => {
        const newCard = newArticles(authorCard);
        newCards.appendChild(newCard);
    })
})

.catch((err)=>{console.log(rer)});

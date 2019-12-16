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

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res);
        const cardArr = res.data.articles['bootstarp', 'javascript', 'jquery', 'node', 'technology'];
        cardArr.forEach((authorCard) => {
            const newCard = updateArticles(authorCard);
            cardsContainer.appendChild(newCard);
        });
        console.log(cardArr);

    })
    .catch(err => {
        console.log(err);
    })

function updateArticles(obj) {
    // creating elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorsName = document.createElement('span');

    // appending to the header div
    card.appendChild(cardHeadline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorsName);

    // adding classes back in
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // add contents to the elements we created
    card.textContent = obj.articles;
    cardHeadline.textContent = obj.headline;
    author.textContent = obj.authorName;
    image.src = obj.authorPhoto;
}
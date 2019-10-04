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
function createArticle(headline, author, image){
    const 
    card = document.createElement('div');
    cardHeadline = document.createElement('div');
    cardAuthor = document.createElement('div');
    cardImage = document.createElement('div')

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    card.appendChild(cardImage)

    card.classList.add('card')
    card.classList.add('headline')
    card.classList.add('author')
    card.classList.add('img-container')

    card.textContent = headline
    card.textContent = author
    card.textContent = image

    return card;
    }
    const articles = document.querySelector('.articles')
    axios 
        .get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response => {
            console.log(response);
            response.data.articles.forEach(article => {
                articles.appendChild(createCard(article));
            });
        })
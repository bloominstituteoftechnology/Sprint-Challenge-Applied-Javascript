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

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    //console.log(response);
    const keys = Object.keys(response.data.articles)
    keys.forEach(item => {
        console.log(response);
        response.data.articles[item].forEach(item => {
            cardsContainer.appendChild(cardCreator(item))
        })
    })
});

function cardCreator (article) {
    const cards = document.createElement('div')
    const headlines = document.createElement('div')
    const authors = document.createElement('div')
    const imageHolder = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')
    
    cards.classList.add('card')
    headlines.classList.add('headline')
    headlines.textContent = article.headline
    authors.classList.add('author')
    imageHolder.classList.add('img-container')
    image.src = article.authorPhoto
    name.textContent = article.authorName
    
    cards.appendChild(headlines)
    cards.appendChild(authors)
    authors.appendChild(imageHolder)
    imageHolder.appendChild(image)
    authors.appendChild(name)
    
    return cards
}
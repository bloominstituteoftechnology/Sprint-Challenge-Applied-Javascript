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
let cards = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
    console.log(response.data.articles);
    const articles = response.data.articles;
    const articleKeys = Object.keys(articles);
    console.log(articleKeys);
    articleKeys.forEach( (element) => {
        console.log(articles[element]);
        articles[element].forEach( (element) => {
            newCard(element);
        });
    });

})  



function newCard(data){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const madeBy = document.createElement('span')

    card.className = 'card'
    headline.className = 'headline'
    author.className  = 'author'
    imageContainer.className = 'img-container'

    headline.innerText = data.headline
    author.innerText = data.authorName
    image.src = data.authorPhoto;

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    author.appendChild(madeBy)
    imageContainer.appendChild(image)
    cards.appendChild(card)
}
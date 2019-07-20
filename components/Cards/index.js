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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((resolve) => {
    console.log('axios', resolve)
    resolve.data.articles.javascript.forEach(data => {
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    })
})
.then((resolve) => {
    console.log('boot', resolve)
    resolve.data.articles.bootstrap.forEach(data => {
        let bootstrap = createBootStrapCards(data);
        cardsContainer.appendChild(bootstrap);

    })
});

let cardsContainer = document.querySelector('.cards-container')
function createJavaScriptCards(js){
    // Creating Elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorsName = document.createElement('span');
    
    // Giving Elements Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    
    // Adding content to the elements
    headline.textContent = js.headline;
    img.src = js.authorPhoto;
    authorsName.textContent = js.authorName;
    
    // Appending elements together
    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img)
    
    console.log('js', js)
    return card
}

function createBootStrapCards(boot){
    // Creating Elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorsName = document.createElement('span');
    
    // Giving Elements Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    
    // Adding content to the elements
    headline.textContent = boot.headline;
    img.src = boot.authorPhoto;
    authorsName.textContent = boot.authorName;
    
    // Appending elements together
    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img)
    
    console.log('boot', boot)
    return card
}
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
.then(response => {
    console.log(response)
    response.data.articles.javascript.forEach(item => {
        cardParent.appendChild(createArticle(item))
    });
    response.data.articles.bootstrap.forEach(item => {
        cardParent.appendChild(createArticle(item))
    });
    response.data.articles.technology.forEach(item => {
        cardParent.appendChild(createArticle(item))
    });
    response.data.articles.jquery.forEach(item => {
        cardParent.appendChild(createArticle(item))
    });
    response.data.articles.node.forEach(item => {
        cardParent.appendChild(createArticle(item))
    });
})
.catch(error => {
    console.log(error ,'the data was not retrieved')
})
function createArticle(articleData) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const by = document.createElement('span')
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    headline.textContent = articleData.headline;
    by.textContent = `By ${articleData.authorName}`
    img.src = articleData.authorPhoto
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(by)
    return card
}
const cardParent = document.querySelector('.cards-container')
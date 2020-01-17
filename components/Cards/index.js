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

axios.get( 'https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    response.data.articles.forEach(element => {
        cardsContainer.appendChild(createArticle1(element))
    });
  console.log(response);
})
.catch( error => {
  // console.log("the data was not returned", error)
})

const cardsContainer = document.querySelector('cards-container')

function createArticle1 (JavaSciptdata){

    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const headLineTitle = document.createElement('h1')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorsName = document.createElement('span')

    card.appendChild(headLine)
    card.appendChild(author)
    headLine.appendChild(headLineTitle)
    author.appendChild(imgContainer)
    author.appendChild(authorsName)
    imgContainer.appendChild(authorImg)

    card.classList.add('card')
    headLine.classList('headLine')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headLineTitle.textContent = JavaScriptdata.headLine


}
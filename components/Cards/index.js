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
.then(data => {
    const articles = data.data.articles

    const articlesArr = []
    articlesArr.push(articles.bootstrap, articles.javascript, articles.jquery, articles.node, articles.technology)

    const allArticles = []
    articlesArr.forEach(subject => subject.forEach(article =>{ allArticles.push(article)}))

    class Articles {
        constructor(article) {
        this.authorName = article.authorName
        this.authorPhoto = article.authorPhoto
        this.headline = article.headline

        const newArticle = createCard(this)
        cardsContainer.appendChild(newArticle)
        }
    }

    const updateArticles = allArticles.forEach(article => new Articles(article))
})
.catch(error => {
    console.log(error)
})

const cardsContainer = document.querySelector('.cards-container')

function createCard(item) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorsName)

    headline.textContent = item.headline
    img.src = item.authorPhoto
    authorsName.textContent = item.authorName

    return card
}
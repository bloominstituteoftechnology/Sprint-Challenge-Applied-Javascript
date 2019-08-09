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
const cards = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        let articles = res.data.articles
        for(topic in articles) {
            articles[topic].forEach(article => cards.appendChild(createArticle(article)))
        }
    })
    .catch(err => console.log(err))

function createArticle(article){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    img.src = article.authorPhoto
    span.textContent = `By ${article.authorName}`
    headline.textContent = article.headline

    card.appendChild(headline)
    card.appendChild(author)
    card.appendChild(span)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)

    return card;
}

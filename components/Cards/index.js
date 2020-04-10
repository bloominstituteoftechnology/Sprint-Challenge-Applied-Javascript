// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// {/* <div class="cards-container"> */}
// const articleCards = document.querySelector('cards-container')


axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((resolve) => {
    getArticles(resolve.data.articles)
  })
  .catch((err) =>
    console.error(err))

// Retrieve and post the articles
const getArticles = (articles) => {
  // Get a list of the article names
  articleNames = Object.keys(articles)

  // Go through each article
  articleNames.forEach(name => {
    articles[name].forEach(article => {
      // fields headline, authorPhoto, authorName
      createCard(article)
    })
  })
}

const createCard = (article) => {
{/* <div class="cards-container"> */}
const articleCards = document.querySelector('.cards-container')

const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imageContainer = document.createElement('div')
  const authorImage = document.createElement('img')
  const authorName = document.createElement('span')

  card.classList.add('card')

  headline.classList.add('headline')
  headline.textContent = article.headline

  author.classList.add('author')
  imageContainer.classList.add('img-container')
  authorImage.setAttribute('src', article.authorPhoto)
  authorName.textContent = `By ${article.authorName}`
  card.appendChild(headline)
  card.appendChild(author)
  card.appendChild(headline)

  author.appendChild(imageContainer)
  author.appendChild(authorName)

  imageContainer.append(authorImage)
  articleCards.appendChild(card)
  // console.log(articleCards)
  // return card
}




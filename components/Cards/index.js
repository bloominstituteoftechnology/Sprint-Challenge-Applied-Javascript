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

const cardEntry = document.querySelector('.cards-container')

function cardMaker (data){
 
  const theCard = document.createElement('div')
  const headline = document.createElement('div')
  const author= document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  theCard.append(headline, author)
  author.append(imgContainer, authorName)
  imgContainer.append(img)

  theCard.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  headline.textContent = data.headline
  img.src = data.authorPhoto
  authorName.textContent = `By ${data.authorName}`

  return theCard
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (data => {
  let authorobjs = data.data.articles.javascript
authorobjs.forEach(data => cardEntry.append(cardMaker(data)))
})

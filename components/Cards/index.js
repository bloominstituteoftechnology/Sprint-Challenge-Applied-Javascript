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

function createCards(headline, imgUrl, author) {
    const card = document.createElement('div')
    const headlineContainer = document.createElement('div')
    const authorContainer = document.createElement('div')
    const authorImgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headlineContainer.classList.add('headline')
    authorContainer.classList.add('author')
    authorImgContainer.classList.add('img-container')

    headlineContainer.textContent = headline
    authorImg.src = imgUrl
    authorName.textContent = 'By ' + author

    card.append(headlineContainer, authorContainer)
    authorContainer.append(authorImgContainer, authorName)
    authorImgContainer.append(authorImg)

   

    return card
}

const cardEntryPoint = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    response.data.articles.javascript.forEach(items => {
        cardEntryPoint.appendChild(createCards(items.headline, items.authorPhoto, items.authorName))
    })

    response.data.articles.bootstrap.forEach(items => {
        cardEntryPoint.appendChild(createCards(items.headline, items.authorPhoto, items.authorName))
    })

    response.data.articles.technology.forEach(items => {
        cardEntryPoint.appendChild(createCards(items.headline, items.authorPhoto, items.authorName))
    })

    response.data.articles.jquery.forEach(items => {
        cardEntryPoint.appendChild(createCards(items.headline, items.authorPhoto, items.authorName))
    })

    response.data.articles.node.forEach(items => {
        cardEntryPoint.appendChild(createCards(items.headline, items.authorPhoto, items.authorName))
    })
    // console.log(response.data.articles)
})

.catch(error => {
    console.log('ya done goofed -->', error)
})
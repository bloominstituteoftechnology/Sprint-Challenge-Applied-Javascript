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
const cardSection = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    response.data.articles.javascript.forEach(article => {
        cardSection.appendChild(cardGenerator(article))
    })
    response.data.articles.bootstrap.forEach(article => {
        cardSection.appendChild(cardGenerator(article))
    })
    response.data.articles.technology.forEach(article => {
        cardSection.appendChild(cardGenerator(article))
    })
    response.data.articles.jquery.forEach(article => {
        cardSection.appendChild(cardGenerator(article))
    })
    response.data.articles.node.forEach(article => {
        cardSection.appendChild(cardGenerator(article))
    })
    
    // response.data.articles.forEach(topic => {
    //     topic.forEach(article => {
    //         cardSection.appendChild(cardGenerator(article))
    //     })
    // })

})
.catch(err => {
    console.log('Error', err)
})

function cardGenerator(data) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const pic = document.createElement('img')
    const feature = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCont)
    author.appendChild(feature)
    imgCont.appendChild(pic)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')
    
    headline.textContent = data.headline
    pic.src = data.authorPhoto
    feature.textContent = `By ${data.authorName}`

    return card
}
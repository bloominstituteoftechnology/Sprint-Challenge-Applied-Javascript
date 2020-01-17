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
    //console.log(response)
    Object.values(response.data.articles).forEach(item => {
        item.forEach(stuff => {
        cards.append(createArticle(stuff))
        })

    })
})
.catch(error => {
    console.log(error)
})


function createArticle(article){
    const cardDiv = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgDiv = document.createElement('div')
    const photo = document.createElement('img')
    const name = document.createElement('span')

    //append
    cardDiv.append(headline)
    cardDiv.append(author)
    author.append(imgDiv)
    author.append(name)
    imgDiv.append(photo)

    //classes
    cardDiv.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgDiv.classList.add('img-container')

    //text content
    headline.textContent = article.headline
    photo.src = article.authorPhoto
    name.textContent = `By ${article.authorName}`


    return cardDiv
}

const cards = document.querySelector('.cards-container')
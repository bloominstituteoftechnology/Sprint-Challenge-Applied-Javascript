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

const cardMaker = (obj) => {

    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(cardHeadline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)
    author.appendChild(authorName)

    cardHeadline.textContent = obj.headline
    image.src = obj.authorPhoto
    authorName.textContent = obj.authorName

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log('API RESPONSE', response)

        const cardContainer = document.querySelector(".cards-container");
        const array = Object.values(response.data.articles);

        array.forEach(element => {
            element.forEach(article => {
                cardContainer.appendChild(cardMaker(article));
            })
        })
    })
    .catch(err => {
        console.log('data not available! ', err)
    })

    .then(() => {
    })
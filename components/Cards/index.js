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


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res =>{
    console.log(res)
    const cardsComponent = document.querySelector('.cards-container')
    const cardData = Object.values(res.data.articles)
    // console.log(cardData)
    cardData.forEach((articleSet)=>{
        articleSet.forEach((article) =>{
            cardsComponent.append(Cards(article))
        })
    })
})
.catch(err =>{
    console.log(err)
})


function Cards(cardAtts) {
    
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authImg = document.createElement('img')
    const authName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(authImg)
    author.appendChild(authName)

    headline.textContent = cardAtts.headline
    authImg.src = cardAtts.authorPhoto
    authName.textContent = `By: ${cardAtts.authorName}`


    return card
}


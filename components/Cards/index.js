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




function cardMaker(article){
    const card = document.createElement('div'),
          headLine = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          authorImg = document.createElement('img'),
          writtenBy = document.createElement('span');

    card.append(headLine)
    card.append(author)
    author.append(imgContainer)
    author.append(writtenBy)
    imgContainer.append(authorImg)

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headLine.textContent = article.headline
    authorImg.src = article.authorPhoto
    writtenBy.textContent = `By ${article.authorName}`

    return card

}

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        let data = Object.values(res.data.articles)
        data.map(item => {
            item.forEach(items => {
                console.log(items)
            cardsContainer.append(cardMaker(items))
            })
        })
        // console.log(data)
    })
    .catch(error => {

    })
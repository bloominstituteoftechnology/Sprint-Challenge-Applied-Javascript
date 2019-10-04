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

// function articlesComponent() {
//     return axios.get('https://lambda-times-backend.herokuapp.com/articles')
//         .then(data => {
//             let metaContent = data.data.articles
//             for (article in metaContent) {
//                 let articleArr = metaContent[article]
//                 articleArr.forEach(article => createArticle(article))
//
//             }
//         })
//         .catch(err => console.log(err))
// }
//
// function createArticle(articleObj) {
//     const card = document.createElement('div')
//     const headline = document.createElement('div')
//     const author = document.createElement('div')
//     const imgContainer = document.createElement('div')
//     const authorPhoto = document.createElement('img')
//     const authorName = document.createElement('span')
//
//     const cardsContainer = document.querySelector('.cards-container')
//
//     cardsContainer.appendChild(card)
//     card.appendChild(headline)
//     card.appendChild(author)
//     author.appendChild(imgContainer)
//     imgContainer.appendChild(authorPhoto)
//     imgContainer.appendChild(authorName)
//
//     card.setAttribute('class', 'card')
//     headline.setAttribute('class', 'headline')
//     author.setAttribute('class', 'author')
//     imgContainer.setAttribute('class', 'img-container')
//     authorPhoto.setAttribute('src', `${articleObj.authorPhoto}`)
//
//
//     headline.textContent = articleObj.headline
//     authorName.textContent = articleObj.authorName
//
// }
//
// articlesComponent()


const uploadCards = document.querySelector('.cards-container')
axios .get('https://lambda-times-backend.herokuapp.com/articles')
      .then (response => {
        //console.log(response.data)
        const articlesObj = response.data.articles
        return articlesObj
      })
      .then(articles => {
        const articlesObj = []
        const javaScriptArticle = articles.javascript
        articlesObj.push(javaScriptArticle)
        const bootStrapArticle = articles.bootstrap
        articlesObj.push(bootStrapArticle)
        const jqueryArticle = articles.jquery
        articlesObj.push(jqueryArticle)
        const nodeArticle = articles.node
        articlesObj.push(nodeArticle)
        const techArticle = articles.technology
        articlesObj.push(techArticle)

        return articlesObj
      })

      .then (data => {
        data.forEach(articleSet => {
          articleSet.forEach(article => {
            uploadCards.appendChild(CreateCard(article));
          });
        });
      })
      .catch(err => console.log(err))

      function CreateCard(obj) {
        const topMain = document.createElement('div')
        const headline = topMain.appendChild(document.createElement('div'))
        const author = topMain.appendChild(document.createElement('div'))
        const imageContainer = author.appendChild(document.createElement('div'))
        const span = author.appendChild(document.createElement('span'))
        const image = imageContainer.appendChild(document.createElement('img'))

        topMain.classList.add('card')
        headline.classList.add('headerline')
        author.classList.add('author')
        imageContainer.classList.add('img-container')
        image.src = obj.authorPhoto
        headline.textContent = obj.headline
        span.textContent = obj.authorName

        return topMain
  }

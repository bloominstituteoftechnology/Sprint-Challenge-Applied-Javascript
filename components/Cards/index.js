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


let cardsContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
console.log(response)
let articles = response.data.articles
console.log(articles)


let topics = Object.keys(articles)
console.log(topics)
topics.forEach(topic =>{
    articles[topic].forEach(article =>{
console.log(article)
cardsContainer.appendChild(card(article))
})

})
})
// let cardsContainer = document.querySelector('.cards-container')
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//      .then(res =>{
//          console.log(res)
//  })
//       let data = res.data.articles
//          console.log(data)
//
//      data.forEach(res => {
//          articles.appendChild(card(data.headline, data.authorPhoto, data.authorName))
//          })
//      .catch (error =>{
//          console.log('bee boop...WRONG', error)
//      })
//})

//article.appendChild(card(javascript.headline, javascript.authorPhoto javascript.authorName javascript.))

function card(article){
    const 
artCard = document.createElement('div')
artHeadline = document.createElement('div')
artAuthor = document.createElement('div')
artImgContainer = document.createElement('div')
artImg = document.createElement('img')
artSpan = document.createElement('span')

//-----------classes----//
artCard.classList.add('card');
artHeadline.classList.add('headline')
artAuthor.classList.add('author')
artImgContainer.classList.add('img-container')
//-----------appends------//
artCard.appendChild(artHeadline)
artCard.appendChild(artAuthor)
artAuthor.appendChild(artImgContainer)
artImgContainer.appendChild(artImg)
artAuthor.appendChild(artSpan)
//----------------text content--------//
artHeadline.textContent = article.headline;
artImg.src = article.authorPhoto;
artSpan.textContent = 'By ' + article.authorName;


return artCard
}
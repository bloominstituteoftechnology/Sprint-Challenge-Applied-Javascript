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
    response.data.forEach(item => {
        getCard(item);
    })
})


function getCard (moreData){
    const freshCard = document.createElement('div')
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div')
    const newImgCont = document.createElement('div')
    const imgOne = document.createElement('img')
    const authName = document.createElement('span')

    freshCard.classList.add('card')
    newHeadline.classList.add('headline')
    newAuthor.classList.add('author')
    imgOne.src = moreData.authorPhoto
    newImgCont.classList.add('img-container')

    newHeadline.textContent = moreData.headline 
    newAuthor.textContent = moreData.authorName


    freshCard.appendChild(newHeadline)
    freshCard.appendChild(newAuthor)
    newAuthor.appendChild(newImgCont)

    const entryPoint = document.querySelector('.cards-container')
    entryPoint.appendChild(freshCard)

return freshCard
}
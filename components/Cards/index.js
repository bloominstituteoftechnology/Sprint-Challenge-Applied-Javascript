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


axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then( res =>{
    console.log(res.data)
  const keysArray =  Object.keys(res.data.articles)
    for (let index = 0; index < keysArray.length; index++) {
        const key = keysArray[index];
        res.data.articles[`${key}`].forEach(element => {
            cardCreator(element)
            console.log(element,"this is the element in articles")
        });
       }
  console.log(keysArray)
    }).catch(err =>{
      console.log(err, 'you have failed')
    })




function cardCreator(data){

    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const authorName = document.createElement("span")

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    img.src = data.authorPhoto

    headline.textContent = data.headline
    authorName.textContent = data.authorName

const cardContainer = document.querySelector(".cards-container")

cardContainer.appendChild(card)
card.appendChild(headline)
card.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(img)
author.appendChild(authorName)

}
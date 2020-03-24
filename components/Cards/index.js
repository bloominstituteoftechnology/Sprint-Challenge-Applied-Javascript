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

const enterPoint = document.querySelector(".cards-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log('response', response.data.articles)
    allArticles.appendChild(useArticles(response.data.article))

    Array.from(response.data.articles).forEach(response => {
        const newArticle = useArticles(response.data.articles)
        enterPoint.appendChild(newArticle(response.data.articles))
    })

})

const useArticles = (obj) => {

    const artCard = document.createElement("div")
    const artHead = document.createElement("div")
    const artAuthor = document.createElement("div")
    const imgCont = document.createElement("div")
    const imgAuthor = document.createElement("img")
    const nameAuthor = document.createElement("span")

    artCard.classList.add("card")
    artHead.classList.add("headline")
    artAuthor.classList.add("author")
    imgCont.classList.add("img-container")

    artHead.textContent = obj
    imgAuthor.src = obj
    nameAuthor.textContent = obj

    return artCard

}

const allArticles = document.querySelector(".cards-container")

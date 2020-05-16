// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

axios.
get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response)
    response.data.articles.forEach(item => {
        let article = createArticle
    })
})
.catch( error => {
    console.log(("The data was not returned", error))
})
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
function Article(){
    //create elements
    const aCard = document.createElement("div")
    const aHeader = document.createElement("div")
    const aAuthor = document.createElement("div")
    const aContainer = document.createElement("div")
    const anImg = document.createElement("img")
    const authorName = document.createElement("span")

    //add classes
    aCard.classList.add("card")
    aHeader.classList.add("headline")
    aAuthor.classList.add("author")
    aContainer.classList.add("img-container")

    //append to parent
    aHeader.appendChild(aCard)
    aAuthor.appendChild(aCard)
    aContainer.appendChild(aAuthor)
    anImg.appendChild(aContainer)
    authorName.appendChild(aAuthor)

    //returning article
    return aCard;
}

// Use your function to create a card for each of the articles and add the card to the DOM.

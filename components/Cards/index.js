// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Use your function to create a card for each of the articles and add the card to the DOM.
const articleSection = document.querySelector(".cards-container")

axios
.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    // let articleKeys = Object.keys(response.data.articles);
    // // console.log(articleKeys);
    // articleKeys.forEach(item => {
    //     // console.log(response.data.articles[item]);
    //     let eachArticle = response.data.articles[item];
    //     console.log(eachArticle)
    //     eachArticle.forEach( (item) => {
    //         let name = item.authorName
    //         let headline = item.headline
    //         let photo = item.authorPhoto
    //         // console.log(name)
    //         // console.log(headline)
    //         // console.log(photo)

    //     articleSection.appendChild(createArticle(item));
    //     })
    // })
    let articleLanguages = response.data.articles;
    Object.keys(articleLanguages).forEach(element =>{ 
        articleLanguages[element].forEach(item => {
            articleSection.appendChild(createArticle(item))
        })
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
function createArticle(element){
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
    aCard.appendChild(aHeader)
    aAuthor.appendChild(aCard)
    aContainer.appendChild(aAuthor)
    anImg.appendChild(aContainer)
    authorName.appendChild(aAuthor)

    //add text content
    authorName.textContent = element.authorName
    aHeader.textContent = element.headline
    anImg.src = element.authorPhoto

    //returning article
    return aCard;
}
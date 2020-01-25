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

function createElement(elementType, elementContent=undefined, elementAttr=undefined, Attr=undefined) {
    const element = document.createElement(elementType)
    elementContent ? element.textContent = elementContent : null
    elementAttr && element.setAttribute(elementAttr, Attr)
    return element
}

function createCard({ headline, authorPhoto, authorName }) {
    const cardDiv = createElement("div", undefined, "class", "card")
    const headlineDiv = createElement("div", headline, "class", "headline")
    const authorDiv = createElement("div", undefined, "class", "author")
    const imgDiv = createElement("div", undefined, "class", "img-container")
    const img = createElement("img", undefined, "src", authorPhoto)
    const nameSpan = createElement("span", `By ${authorName}`)
    imgDiv.appendChild(img)
    authorDiv.appendChild(imgDiv)
    authorDiv.appendChild(nameSpan)
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    return cardDiv
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        const articlesKeys = Object.keys(res.data.articles)
        articlesKeys.forEach(article => {
            res.data.articles[article].forEach(card => {
                document.querySelector(".cards-container").appendChild(createCard(card))
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
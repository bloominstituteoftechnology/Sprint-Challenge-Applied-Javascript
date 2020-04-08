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

function newCard(items) {
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card");

    const cardHeadline = document.createElement("div");
    cardHeadline.classList.add("headline");
    cardHeadline.textContent = items.headline

    const cardAuthor = document.createElement("div");
    cardAuthor.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", items.authorPhoto)

    const nameAuth = document.createElement("span");
    nameAuth.textContent =  `By ${items.authorName}`
 
    cardTitle.append(cardHeadline);
    cardTitle.append(cardAuthor);
    cardAuthor.append(imgContainer);
    imgContainer.append(cardImg);
    cardAuthor.append(nameAuth);

    return cardTitle
}

const cardsParent = document.querySelector("div.cards-container")

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        console.log(response.data.articles)
        for(const topic in response.data.articles) {
            response.data.articles[topic].forEach(article => { 
                cardsParent.append(newCard(article))
            })
        } 
    })
    .catch( err => {
        console.log("There's an error", err)
    })

    // small edit to push 
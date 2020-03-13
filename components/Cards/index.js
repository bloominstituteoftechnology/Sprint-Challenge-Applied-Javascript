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

const cardsParent = document.querySelector("div.cards-container")

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        // deal with the response data in here
        console.log(response.data.articles)
        for(const topic in response.data.articles) {
            response.data.articles[topic].forEach(article => { 
                cardsParent.append(cardCreator(article))
            })
        } 
    })
    .catch( err => {
        // deal with the error in here
        console.log("There's an error", err)
    })



cardCreator = obj => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardHead = document.createElement("div");
    cardHead.classList.add("headline");
    cardHead.textContent = obj.headline
    cardDiv.append(cardHead);

    const cardAuth = document.createElement("div");
    cardAuth.classList.add("author");
    cardDiv.append(cardAuth);

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("img-container");
    cardAuth.append(cardImgContainer);

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", obj.authorPhoto)
    cardImgContainer.append(cardImg);

    const nameAuth = document.createElement("span");
    nameAuth.textContent =  `By ${obj.authorName}`
    cardAuth.append(nameAuth);

    return cardDiv
}
/*
 <div class="card">
    <div class="headline">{Headline of article}</div>
    <div class="author">
        <div class="img-container">
            <img src={url of authors image} />
        </div>
        <span>By {authors name}</span>
    </div>
 </div>
*/
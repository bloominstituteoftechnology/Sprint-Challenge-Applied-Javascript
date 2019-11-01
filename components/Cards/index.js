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

const cardContainer = document.querySelector(".cards-container");

function card(info){
    const cards = document.createElement("div");
    const cardsHeadline = document.createElement("div");
    const cardsAuthorContainer = document.createElement("div");
    const cardsImgContainer = document.createElement("div");
    const cardsImg = document.createElement("img");
    const cardsAuthor = document.createElement("span");

    cards.classList.add("card");
    cardsHeadline.classList.add("headline");
    cardsAuthorContainer.classList.add("author");
    cardsImgContainer.classList.add("img-container");

    cardsHeadline.textContent = info.headline;
    cardsImg.setAttribute("src", info.authorPhoto);
    cardsAuthor.textContent = info.authorName;

    cards.appendChild(cardsHeadline);
    cards.appendChild(cardsAuthorContainer);
    cardsAuthorContainer.appendChild(cardsImgContainer);
    cardsImgContainer.appendChild(cardsImg);
    cardsAuthorContainer.appendChild(cardsAuthor);

    cardContainer.appendChild(cards);

    return cards;

}


axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {

        const articles = response.data.articles;

        for (var key in articles) {
            const info = articles[key];

            info.forEach(element => {
                card(element);
            });
        }
    })
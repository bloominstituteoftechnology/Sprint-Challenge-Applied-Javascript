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

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");

const tabs = document.querySelector(".tabs");
tabs.after(cardsContainer);

const topics = ["javascript", "bootstrap", "technology", "jquery", "node"];

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log("response.data", response.data);

    topics.forEach(topic => {
      response.data.articles[topic].forEach(article => {
        const card = Card(article);

        const cards = document.querySelector(".cards-container");

        cards.appendChild(card);
      });
    });
  })
  .catch(err => {
    console.log("err", err);
  });

function Card(article) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = article.headline;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.setAttribute("src", article.authorPhoto);
  imgContainerDiv.appendChild(img);

  const spanForAuthorName = document.createElement("span");
  spanForAuthorName.textContent = article.authorName;

  authorDiv.appendChild(imgContainerDiv);

  cardDiv.appendChild(authorDiv);

  return cardDiv;
}

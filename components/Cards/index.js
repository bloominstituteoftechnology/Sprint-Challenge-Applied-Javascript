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
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.bootstrap.forEach(article => newCard(article));
    response.data.articles.javascript.forEach(article => newCard(article));
    response.data.articles.jquery.forEach(article => newCard(article));
    response.data.articles.node.forEach(article => newCard(article));
    response.data.articles.technology.forEach(article => newCard(article));
  });

function newCard(card) {
  const newArticleCard = document.createElement("div"),
    newHeadline = document.createElement("div"),
    newAuthor = document.createElement("div"),
    newImageDiv = document.createElement("div"),
    newImage = document.createElement("img"),
    newAuthorName = document.createElement("span");

  newArticleCard.appendChild(newHeadline);
  newArticleCard.appendChild(newAuthor);
  newAuthor.appendChild(newImageDiv);
  newAuthor.appendChild(newAuthorName);

  newArticleCard.classList.add("card");
  newHeadline.classList.add("headline");
  newAuthor.classList.add("author");
  newImageDiv.classList.add("img-container");

  newHeadline.textContent = card.headline;
  newImage.src = card.authorPhoto;
  newAuthorName.textContent = card.authorName;

  newImageDiv.appendChild(newImage);

  const cardContainer = document.querySelector(".cards-container");
  cardContainer.appendChild(newArticleCard);

  return newArticleCard;
}

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
const topicsCard = document.querySelector(".card");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.forEach(article => {
      topicsCard.appendChild(cards(article));
    });
  });

// function cards
function cards(card) {
  const newCard = document.createElement("div"),
    newHeadline = document.createElement("div"),
    newAuthor = document.createElement("div"),
    newImageDiv = document.createElement("div"),
    newImage = document.createElement("img"),
    newName = document.createElement("span");

  newCard.appendChild("div");
  newCard.appendChild("div");
  newCard.appendChild("div");
  newCard.appendChild("div");
  newCard.appendChild("img");
  newCard.appendChild("span");

  newHeadline.textContent = "Headline of article";
  newAuthor.textContent = "author";
  newImage.src = card;
  newName.textContent = "authors name";

  newCard.classList.add("card");
  newCard.classList.add("headline");
  newCard.classList.add("author");
  newCard.classList.add("img-container");

  return newCard;
}

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
    let bootstraps = response.data.articles.bootstrap;
    let javascript = response.data.articles.javascript;
    let technology = response.data.articles.technology;
    let jquery = response.data.articles.jquery;
    let nodejs = response.data.articles.node;
    bootstraps.forEach(cb => {
      let arti = Card(cb.headline, cb.authorPhoto, cb.authorName);
      container.appendChild(arti);
    });
    javascript.forEach(cb => {
      let arti = Card(cb.headline, cb.authorPhoto, cb.authorName);
      container.appendChild(arti);
    });
    technology.forEach(cb => {
      let arti = Card(cb.headline, cb.authorPhoto, cb.authorName);
      container.appendChild(arti);
    });
    jquery.forEach(cb => {
      let arti = Card(cb.headline, cb.authorPhoto, cb.authorName);
      container.appendChild(arti);
    });
    nodejs.forEach(cb => {
      let arti = Card(cb.headline, cb.authorPhoto, cb.authorName);
      container.appendChild(arti);
    });
  })
  .catch(error => {
    console.log(error);
  });

let container = document.querySelector(".cards-container");
function Card(headline, imgUrl, authorsName) {
  let cardContainer = document.createElement("div");
  let headlineDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  cardContainer.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

  cardContainer.appendChild(headlineDiv);
  cardContainer.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(span);

  headlineDiv.textContent = headline;
  img.src = imgUrl;
  span.textContent = authorsName;

  return cardContainer;
}

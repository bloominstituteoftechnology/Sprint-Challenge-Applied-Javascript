// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// {/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */}
//
// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then(response => {
// console.log(response)
// });
const tainer = document.querySelector("cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.javascript.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
    response.data.articles.bootstrap.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
    response.data.articles.Array.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
    response.data.articles.technology.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
    response.data.articles.jquery.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
    response.data.articles.node.forEach(e => {
      document.querySelector("cards-container").appendChild(container(e));
    });
  });

// .catch(error => {
//         console.log("Error", error);
//       });
// Create a card for each of the articles and add the card to the DOM.

function container(object) {
  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  card.appendChild(headLine, author);
  author.appendChild(imgContainer, span);
  imgContainer.appendChild(img);

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headLine.textContent = object.headline;
  img.src = object.authorPhoto;
  span.textContent = object.authorName;

  return card;
}

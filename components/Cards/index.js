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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let articles = response.data.articles;
    Object.keys(articles).forEach(topic => {
      console.log(topic);
      articles[topic].forEach(item => {
        cardContainer.appendChild(createCard(item));
      });
    });
  });

const cardContainer = document.querySelector(".cards-container");

const createCard = data => {
  const newCard = document.createElement("div");

  const head = document.createElement("div");
  const author = document.createElement("div");
  
  const imgContainer = document.createElement("div");
  const authorName = document.createElement("span");
  
  const authorImg = document.createElement("img");


  newCard.classList.add("card");
  head.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");


  newCard.appendChild(head);
  newCard.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);

  
  head.textContent = data.headline;
  authorImg.src = data.authorPhoto;
  authorName.textContent = data.authorName;

  return newCard;
};
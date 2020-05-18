// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardMaker = (obj, topic) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorsName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.append(headline, author);
  author.append(imgContainer, authorsName);
  imgContainer.appendChild(img);

  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  authorsName.textContent = obj.authorName;

  return card;
};

cardContainer = document.querySelector("div.cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response.data.articles);

    const articles = Object.keys(response.data.articles);

    articles.map((article) => {
      response.data.articles[article].map((indArticle) => {
        cardContainer.append(cardMaker(indArticle, article));
      });
    });
  });

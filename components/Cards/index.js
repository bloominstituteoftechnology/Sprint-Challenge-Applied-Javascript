// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address
//: https://lambda-times-backend.herokuapp.com/articles
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
const cardContainer = document.querySelector("div.cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    let articleCard = response.data.articles;
    console.log(articleCard);
    Object.entries(articleCard).forEach((articleloop) => {
      console.log(articleloop[1]);
      articleloop[1].forEach((articles) =>
        cardContainer.appendChild(articleMaker(articles))
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

function articleMaker(article) {
  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.append(headLine, author);
  author.append(imgContainer, authorName);
  imgContainer.appendChild(image);

  headLine.textContent = article.headline;
  authorName.textContent = article.authorName;
  image.src = article.authorPhoto;

  return card;
}

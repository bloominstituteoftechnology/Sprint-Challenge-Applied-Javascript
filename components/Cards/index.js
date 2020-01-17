// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

function Article(items) {
  const cards = document.createElement("div");
  const Headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorsName = document.createElement("span");

  cards.appendChild(Headline);
  cards.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorsName);
  imgContainer.appendChild(img);

  cards.classList.add("card");
  Headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  Headline.textContent = items.headline;
  authorsName.textContent = items.authorName;
  img.src = items.authorPhoto;

  return cards;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const articleArray = res.data.articles;
    console.log(res);
    Object.keys(articleArray).map(key => {
      value = articleArray[key];
      value.map(arts => {
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.append(Article(arts));
      });
    });
  })
  .catch(err => {
    console.log(err);
  });

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

const cards = document.querySelector("cards-container");

axios
  .get ("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
      console.log(response);
      Object.values(response.data.articles).forEach(item => {
          item.forEach(item => {
            let cards = document.querySelector(".cards-container");
            cards.appendChild(articleCreate(item));
          })
      })
  })

  .catch(error => {
      console.log(error);
  })

  function articleCreate(article) {

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const span3 = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(span3);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    img.src = article.authorPhoto;
    span3.textContent = `By ${article.authorName}`;
    headline.textContent = article.headline

    return card;
  }
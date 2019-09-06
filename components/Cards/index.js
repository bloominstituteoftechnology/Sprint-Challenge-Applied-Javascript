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
  .then(data => {
    const articles = Object.values(data.data.articles);
    const artData = Object.keys(data.data.articles);

    articles.forEach(articleType => {
      articleType.forEach(article => {
        const index = articles.indexOf(articleType);
        const cards = document.querySelector(".cards-container");
        const card = Article(article);
        card.setAttribute("data-tab", artData[index]);
        cards.appendChild(card);
      });
    });
    console.log("Success", artData);
  })
  .catch(error => {
    console.log("ERROR", error);
  });

function Article(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  //Add Classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //Add Content
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  authorName.textContent = obj.authorName;

  //Append Content
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}

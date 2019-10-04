function createCard(object) {
  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  card.classList.add("card");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const byLine = document.createElement("span");

  headLine.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

    headLine.textContent = object.headline
    byLine.textContent = `by ${object.authorName}`
    image.src = object.authorPhoto;

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imageContainer);
  author.appendChild(byLine);
  imageContainer.appendChild(image)

  return card;
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  console.log(response.data.articles);
  const cardContainer = document.querySelector(".cards-container");
  const topics = response.data.articles;
  Object.values(topics).map(topic => {
    console.log(topic);
    topic.map(article => {
    console.log(article.headline)
    cardContainer.appendChild(createCard(article));
    })
    
  });
});

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

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

// component to display the article data
function Card(obj) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const header = document.createElement("div");
  header.classList.add("headline");
  header.textContent = obj.headline;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  const newImg = document.createElement("img");
  newImg.src = obj.authorPhoto;

  const span = document.createElement("span");
  span.textContent = obj.authorName;

  newCard.appendChild(header);
  newCard.appendChild(imageContainer);
  newCard.appendChild(newImg);
  newCard.appendChild(span);

  return newCard;
}

const entry = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    for (let key in response.data.articles) {
      console.log(key);
      for (let i = 0; i < response.data.articles[key].length; i++) {
        // Do whatever you need to
        const newCard = Card(response.data.articles[key][i]);
        console.log(response.data.articles[key][i]);
        entry.appendChild(newCard);
      }
    }
  })

  .catch(err => {
    console.log(err);
  });

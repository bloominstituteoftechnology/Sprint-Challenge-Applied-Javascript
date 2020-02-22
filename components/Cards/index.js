// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// {
//     <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */
// }
//
// Create a card for each of the articles and add the card to the DOM.
const cardTest = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const arrayConvert = Object.keys(response.data.articles);
    arrayConvert.forEach(a => {
      a.javascript;
      a.bootstrap;
      a.technology;
      a.jquery;
      a.node;
    });
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

const cardComponent = obj => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = obj.headline;
  cardDiv.appendChild(headline);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  authorDiv.appendChild(imgDiv);

  const imgUrl = document.createElement("img");
  imgUrl.src = obj.authorPhoto;
  imgDiv.appendChild(imgUrl);

  const authorSpan = document.createElement("span");
  authorSpan.textContent = obj.authorName;
  authorDiv.appendChild(authorSpan);

  return cardDiv;
};

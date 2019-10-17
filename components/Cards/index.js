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
const cardContainer = document.querySelector(".cards-container");
const articles = fetch("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => res.json())
  .then(data => {
    const articleData = Object.values(data.articles);
    for (dataSet of articleData) {
      let div = document.createElement("div");
      div.setAttribute("class", "card");
      let cardTemplate = `
        <div class="headline">${dataSet.headline}</div>
          <div class="author">
            <div class="img-container">
              <img src=${dataSet.authorPhoto} />
          </div>
          <span>By ${dataSet.authorName}</span>
        </div> 
      `;

      div.innerHTML = cardTemplate;
      cardContainer.appendChild(div);
    }
  });
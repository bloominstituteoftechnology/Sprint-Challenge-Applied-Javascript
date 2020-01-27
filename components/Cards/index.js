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
// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     // handle success
//     // console.log(response.data.articles);
//     let articles = Object.entries(response.data.articles);
//     console.log(articles);
//     articles.forEach(article => {
//       cardsCont.appendChild(createCard(article));
//     });
//     let headlines = Object.values(response.data.articles);
//     console.log(headlines);
//     // for (const [key, value] of Object.entries(response.data.articles)) {
//     //   console.log(`${key} : ${value}`);
//     //   for (const [key2, value2] of Object.entries(`${key}`)) {
//     //     console.log(`${key2} : ${value2}`);
//     //   }
//     // }
//     // Object.keys(response.data.articles).forEach(article => {
//     //   console.log(article[headline]);
//     //   // .appendChild(createTab(topic));
//     // });
//   });

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let articles = response.data.articles;
    Object.keys(articles).forEach(topic => {
      console.log(topic);
      articles[topic].forEach(row => {
        cardsCont.appendChild(createCard(row));
      });
    });
  });

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

const cardsCont = document.querySelector(".cards-container");

const createCard = data => {
  const cardDiv = document.createElement("div");
  // child of cardDiv
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  // children of authorDiv
  const imgDiv = document.createElement("div");
  const authorNameDiv = document.createElement("span");
  // child of imgDiv
  const authorImg = document.createElement("img");

  // add classnames to elements
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  // append elements together

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorNameDiv);
  imgDiv.appendChild(authorImg);

  // content
  headlineDiv.textContent = data.headline;
  authorImg.src = data.authorPhoto;
  authorNameDiv.textContent = data.authorName;

  return cardDiv;
};

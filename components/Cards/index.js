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
let cardCastle = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response.data);
    let articleData = response.data.articles;
    let articleKeys = Object.keys(articleData);

    articleKeys.forEach((e) => {
      articleData[e];
      console.log(articleData[e]);
      articleData[e].forEach((e) => {
        cardCastle.append(cardMaker(e));
      });
    });
  });

function cardMaker(element) {
  const card1 = document.createElement("div");
  const cardD2 = document.createElement("div");
  const cardD3 = document.createElement("div");
  const cardD4 = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSpan = document.createElement("span");

  cardD2.textContent = `${element.headline}`;
  cardImg.src = `${element.authorPhoto}`;
  cardSpan.textContent = `${element.authorName}`;

  card1.classList.add("card");
  cardD2.classList.add("headline");
  cardD3.classList.add("auther");
  cardD4.classList.add("img-container");

  card1.appendChild(cardD2);
  card1.appendChild(cardD3);
  cardD3.appendChild(cardD4);
  cardD4.appendChild(cardImg);
  cardD3.appendChild(cardSpan);
  return card1;
}

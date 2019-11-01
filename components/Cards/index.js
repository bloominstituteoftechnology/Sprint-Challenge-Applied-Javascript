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
//    <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function(res) {
    console.log(res);
    cardCreator(res);
    entryPoint.append(newCard);
    // console.log(res.data.articles);
  })
  .catch(err => console.log(err));

const entryPoint = document.querySelector(".cards-container");

function cardCreator(res) {
  for (var key in res.data.articles) {
    // console.log(key);
    let name = key;
    console.log(name);

    // console.log(res.data.articles[name].length);
    for (let i = 0; i < res.data.articles[name].length; i++) {
      console.log(i);
      const newCard = document.createElement("div");
      const headline = document.createElement("div");
      const author = document.createElement("div");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");
      const span = document.createElement("span");

      newCard.classList.add("card");
      headline.classList.add("headline");
      author.classList.add("author");
      imgDiv.classList.add("img-container");
      headline.textContent = res.data.articles[name][i].headline;
      img.src = res.data.articles[name][i].authorPhoto;
      span.textContent = res.data.articles[name][i].authorName;
      newCard.append(headline, author, span);
      author.appendChild(img);
      entryPoint.append(newCard);
    }
  }
  return newCard;
}

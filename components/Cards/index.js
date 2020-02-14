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
let cardEntry = document.querySelector(".cards-container");
let makeCard = obj => {
  let cardDiv = document.createElement("div");
  let headLine = document.createElement("div");
  let author = document.createElement("div");
  let imgCon = document.createElement("div");
  let authorName = document.createElement("span");
  cardDiv.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgCon.classList.add("img-container");
  headLine.innerHTML = obj.headline;
  imgCon.innerHTML = `<img src='${obj.authorPhoto}'/>`;
  authorName.innerHTML = obj.authorName;
  author.append(imgCon);
  author.append(authorName);
  headLine.append(author);
  cardDiv.append(headLine);
  return cardDiv;
};

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  console.log(
    Object.values(res.data.articles).map(a => {
      return cardEntry.append(makeCard(a[0]));
    })
  );
});

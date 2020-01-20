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
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.values(response.data.articles).forEach(item => {
      item.forEach(info => {
        cards.append(createCard(info));
      });
    });
  })
  .catch(err => {
    console.log("Nothing to display", err);
  });
function createCard(user) {
  const newCard = document.createElement("div"),
    newHead = document.createElement("div"),
    newAuth = document.createElement("div"),
    newImgd = document.createElement("div"),
    newImg = document.createElement("img"),
    newSpan = document.createElement("span");
  newCard.classList.add("card");
  newHead.classList.add("headline");
  newAuth.classList.add("author");
  newImgd.classList.add("img-container");
  newHead.textContent = user.headline;
  newImg.src = user.authorPhoto;
  newSpan.textContent = `By: ${user.authorName}`;
  newCard.append(newHead);
  newCard.append(newAuth);
  newAuth.append(newImgd);
  newImgd.append(newImg);
  newAuth.append(newSpan);
  return newCard;
}
const cards = document.querySelector(".cards-container");



// for (let i = 0; i < cardHolder.length; i++) {
//     cardHolder.push(newCard[i])
// console.log(newCard);
// };




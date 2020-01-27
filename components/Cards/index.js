// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

// elements
function myCard(info) {
  const newCard = document.createElement("div");
  const newHeadline = document.createElement("div");
  const newAuthor = document.createElement("div");
  const newImageContainer = document.createElement("div");
  const newImage = document.createElement("img");
  const newName = document.createElement("span");

  // classes
  newCard.classList.add("card");
  newHeadline.classList.add("headline");
  newAuthor.classList.add("author");
  newImageContainer.classList.add("img-container");

  //structure
  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImageContainer);
  newImageContainer.appendChild(newImage);
  newAuthor.appendChild(newName);

  //content
  newHeadline.textContent = info.headline;
  newImage.src = info.authorPhoto;
  newName.textContent = info.authorName;
  // console.log(newCard);
  return newCard;
}

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response.data.topics);
    const article = response.data.articles;
    // console.log(article);

    article.javascript.forEach(e => {
      // myCard(e);
      cardContainer.appendChild(myCard(e));
      // myCard(e.headline);
      // const newArt = document.createElement("div");
      // cardContainer.appendChild(newArt);
      // newArt.classList.add("card");
      // newArt.textContent = e.headline;
      // console.log(myCard(e));
      // newArt.appendChild(myCard(e));
      // console.log(newArt);
      // console.log(e);
    });
  })
  .catch(error => {
    console.log("Oops! We can't find the data");
  });

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
// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     console.log(response.data);
//   });

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    // cardContainer.appendChild(newArticle(response));
    Object.values(response.data.articles).forEach(item => {
      item.forEach(item => {
        let card = document.querySelector(".cards-container ");
      });
    });
  })

  // const articleArray = cardContainer.values();
  //   articleData.forEach(element => {
  //     cardsContainer.appendChild(newArticle);
  //   });
  // });

  .catch(error => {
    console.log(error);
  });

//   const newArticle = new articles(element);
// });

function articleCard(data, authorPhoto, authorName) {
  const newArticle = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authordiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const aDiv = document.createElement("img");
  const aName = document.createElement("span");

  headlineDiv.textContent = data;
  aDiv.src = authorPhoto;
  aName.textContent = authorName;

  newArticle.appendChild(headlineDiv);

  newArticle.appendChild(headlineDiv);

  headlineDiv.appendChild(headlineDiv);

  aDiv.appendChild(authorImg);

  aDiv.appendChild(aName);

  newArticle.classList.add("card");
  headlineDiv.classList.add("headLine");
  authordiv.classList.add("author");
  imgDiv.classList.add("img-container");

  return newArticle;
}

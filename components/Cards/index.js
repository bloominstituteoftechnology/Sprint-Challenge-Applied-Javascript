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

// Axios
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
function newCards() {
  const card = document.createElement("div");
  card.classList.add("card");

  //Go Back to add headline of article after the article is done
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = `${object.headline}`;

  const author = document.createElement("div");
  author.classList.add("author");

  //Go Back to add Image source once axios call is done
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `${object.url}`;

  const madeBy = document.createElement("span");
  madeBy.textContent = ``;

  //Appended
  imgContainer.appendChild(img);
  author.appendChild(madeBy);
  author.appendChild(imgContainer);
  card.appendChild(headline);
  card.appendChild(author);
  return card;
}
// Trial Data
/*function findProp(obj, prop, defval) {
  if (typeof defval == "undefined") defval = null;
  prop = prop.split(".");
  for (var i = 0; i < prop.length; i++) {
    if (typeof obj[prop[i]] == "undefined") return defval;
    obj = obj[prop[i]];
  }
  return obj;
}*/

bootstrap = { headline: "John", age: 30, car: null };

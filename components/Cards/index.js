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

//=========================================================================================

// add HTTP request

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    console.log(res.data.articles);

    //append to DOM

    const cardContainer = document.querySelector(".cards-container");

    //iteration

    res.data.articles.javascript.forEach((i) => {
      cardContainer.appendChild(cards(i));
    });

    res.data.articles.bootstrap.forEach((i) => {
      cardContainer.appendChild(cards(i));
    });

    res.data.articles.technology.forEach((i) => {
      cardContainer.appendChild(cards(i));
    });

    res.data.articles.jquery.forEach((i) => {
      cardContainer.appendChild(cards(i));
    });

    res.data.articles.node.forEach((i) => {
      cardContainer.appendChild(cards(i));
    });
  })

  //catch

  .catch((error) => {
    console.log("error", error);
  });

//add function

function cards(e) {
  //create elements

  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  //add classes

  card.classList.add(".card");
  headLine.classList.add(".headline");
  author.classList.add(".author");
  imageContainer.classList.add(".img-container");

  //add text

  headLine.textContent = e.headline;
  image.src = e.authorPhoto;
  authorName.textContent = "By ${e.authorName}";

  //append children

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imageContainer);
  author.appendChild(authorName);
  imageContainer.appendChild(image);

  //return function

  return cards;
}

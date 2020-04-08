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

function articleCreator(dataObj) {
    let card = document.createElement("div");
    let headline = document.createElement("div");
    let author = document.createElement("div");
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let spanner = document.createElement("span");
  
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgDiv.classList.add("img-container");
  
    headline.textContent = dataObj.headline;
   
    img.src = dataObj.authorPhoto;
    
    spanner.textContent = `By ${dataObj.authorName}`;
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgDiv);
    author.appendChild(spanner);
    imgDiv.appendChild(img);
  
    return card;
  }
let myObj2 = axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);

    response.data.articles.javascript.forEach(item => {
        console.log(item);
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.bootstrap.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.technology.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.jquery.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    response.data.articles.node.forEach(item => {
        cards.appendChild(articleCreator(item));
    })
    
  }) 
  .catch(err => {
    console.log(err);
  })



let cards = document.querySelector(".cards-container");
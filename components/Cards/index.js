// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
const cardsContainer = document.querySelector(".cards-container")
let cardData = [];

//get request
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (res) {
    // handle success
    console.log(res);
    let javaScriptArray = res.data.articles.javascript;
    let bootStrapArray = res.data.articles.bootstrap;
    let jQueryArray = res.data.articles.jquery;
    let nodeArray = res.data.articles.node;
    let technologyArray = res.data.articles.technology;

    javaScriptArray.forEach((element) => {
      cardsContainer.appendChild(Cards(element));
    });
    bootStrapArray.forEach(element => {
      cardsContainer.appendChild(Cards(element));
    });
    jQueryArray.forEach(element => {
      cardsContainer.appendChild(Cards(element));
    });
    nodeArray.forEach(element => {
      cardsContainer.appendChild(Cards(element));
    });
    technologyArray.forEach(element => {
      cardsContainer.appendChild(Cards(element));
    })
  })
  .catch(function (err) {
    // handle error
    console.log(err);
  })
  .then(function () {
    // always executed
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


    function Cards(arr) {
        //variables
  
            const card = document.createElement("div");
            const headline = document.createElement("div");
            const author = document.createElement("div");
            const imageContainer = document.createElement("div")
            const authorImage = document.createElement("img")
            const authorName = document.createElement("span")
    
        //classes
    
            card.classList.add("card")
            headline.classList.add("headline")
            author.classList.add("author")
            imageContainer.classList.add("img-container")

        //appending
            cardsContainer.append(card)
            card.append(headline)
            card.append(author)
            author.append(authorName)
            card.append(imageContainer)
            imageContainer.append(authorImage)
        //text

            headline.textContent = arr.headline
            authorName.textContent = arr.authorName;
            authorImage.src = arr.authorPhoto;
      return card;
    }
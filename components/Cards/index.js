// import axios from "axios";
// const axios = require('axios');

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

axios.get ("https://lambda-times-backend.herokuapp.com/articles")
    .then (function(response){
         Object.keys(response.data.articles).forEach(key => {
             response.data.articles[key].forEach(article => {
                cardContainer.appendChild(createCard(article));
             })
           
        
         })
            
        
        
        

    
    })
    .catch (function(error) {

    })
    .then (function () {

    });





function createCard (article) {
    // const cards = document.createElement("div");


//    articles.forEach(article => {
    
        const card = document.createElement("div");
        const headline = document.createElement("div");
        headline.textContent = article.headline;
        const author = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = article.authorPhoto;
        const authorName = document.createElement("span");
        authorName.textContent = article.authorName;

        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        author.appendChild(authorName)
        imgContainer.append(img)



        card.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");

        // cards.appendChild(card);

    // })

     return card;
}

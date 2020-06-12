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

let area = document.querySelector('.cards-container');
function cardMaker(){

    //create HTML elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContain = document.createElement('div');
    let authorImg = document.createElement('img');
    let authorName = document.createElement('span');

    //add class information to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContain.classList.add('img-container');

    //place content into elements



    //append elements properly
    area.appendChild(card);
    card.append(headline, author);
    author.append(imgContain, authorName);
    imgContain.appendChild(authorImg);

}
cardMaker();
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

//const axios = require('axios');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const data = response.data.articles;
        const keys = Object.keys(data);
        keys.forEach(key => data[key].forEach(element => Cards(element)));
    })
    .catch(err => console.log('Error'))

// Jose's way
// axios.get('https://lambda-times-backend-herokuapp.com/articles')
//     .then(response => {
//         let data = response.data.articles;
//         for(let key in data){
//               data[key].forEach(element => {
//                   let cardentry = document.querySelector('.cards-container');
//                   cardentry.appendChild(cards(element));
//         });
//      }
// })       


function Cards(object) {

    // create elements
    const container = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

    // add classes
    container.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // create structure
    container.appendChild(headline);
    container.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    //add content
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    span.textContent = 'By ' + object.authorName;

    document.querySelector('.cards-container').appendChild(container);
}
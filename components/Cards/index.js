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

const cardsCont = document.querySelector('.cards-container');

function Card (item) {
  const mycard = document.createElement('div');
  mycard.classList.add('card');

  // inside card
  const headlineCard = document.createElement('div');
  headlineCard.classList.add('headline');
  headlineCard.textContent = item.headline;//headline article

  const author = document.createElement('div');
  author.classList.add('author');

  // inside author
  const imgCont = document.createElement('div');
  imgCont.classList.add('img-container');

  // inside imgCont
  const authorImg = document.createElement('img');
  authorImg.src = item.authorPhoto;//url author image

  const authorName = document.createElement('span');
  authorName.textContent = item.authorName;//author name


  imgCont.appendChild(authorImg);

  author.appendChild(imgCont);
  author.appendChild(authorName);

  mycard.appendChild(headlineCard);
  mycard.appendChild(author);

  return mycard;

};

// const axios = require('axios').default;

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( (response) => {
    // handle success
    response.data.articles.javascript.forEach((item) => {
      let newCard = Card(item);
      cardsCont.appendChild(newCard);
    });
    response.data.articles.bootstrap.forEach((item) => {
      let newCard = Card(item);
      cardsCont.appendChild(newCard);
    });
    response.data.articles.technology.forEach((item) => {
      let newCard = Card(item);
      cardsCont.appendChild(newCard);
    });
    response.data.articles.jquery.forEach((item) => {
      let newCard = Card(item);
      cardsCont.appendChild(newCard);
    });
    response.data.articles.node.forEach((item) => {
      let newCard = Card(item);
      cardsCont.appendChild(newCard);
    });

  })
  .catch( (error) => {
    // handle error
    console.log(error);
  });

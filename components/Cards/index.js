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

// do i need to make an array here of the data in console??
// const cardData = [
//     {

//     }
// ] 
const articleData = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

console.log(articleData);

const newCard = document.querySelector('.cards-container');

function createCard (data) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = 'Article';

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.src = data.authorPhoto;

    const image = document.createElement('img');
    image.src = data.authorPhoto;

    const authorName = document.createElement('span');
    authorName.textContent = data.authorName;


    newCard.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(image);

    return newCard;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.javascript})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.bootstrap})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
});

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.jquery})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
});


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.node})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
});

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {return response.data.articles})
    .then((objObj) => {return objObj.technology})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
});
// function articleCard(articleCards) {
//     const card = document.createElement('div');
//     const headline = document.createElement('div');
//     const author = document.createElement('div');
//     const container = document.createElement('div');
//     const image = document.createElement('img');
//     const by = document.createElement('span');

//     // content
//     headline.textContent = data.articles.headline;
//     image.src = articleCards;
//     author.textContent = data.articles.author;

//     // appends
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(container);
//     container.appendChild(image);
//     author.appendChild(by);

//     return card;
// }

// const entryPoint = document.querySelector(".cards-container");

// //axios fetch
// axios
//     .get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response);
//     response.data.articles.forEach(item => {
//         const newCard = articleCard(item);
//         entryPoint.appendChild(newCard);
//     });
//     })



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


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         const {
//             javascript,
//             bootstrap
//         } = response.data.articles;
//         console.log(response);
//         getArticles(javascript);

//     })



// function getArticles(array){
// // createCard()
// array.forEach(element => {
//     createCard(article)
// });
// }

// function createCard(article) {
//     const
//         cardContainer = document.createElement('div'),
//         headline = document.createElement('div'),
//         author = document.createElement('div'),
//         imgContainer = document.createElement('div'),
//         image = document.createElement('img'),
//         name = document.createElement('span');

//     cardContainer.appendChild(headline);
//     cardContainer.appendChild(author);
//     author.appendChild(name);
//     author.appendChild(imgContainer);
//     imgContainer.appendChild(image);

//     cardContainer.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imgContainer.classList.add('img-container');

//     headline.textContent = `${data.headline}`;
//     image.src = `${data.authorPhoto}`




// }
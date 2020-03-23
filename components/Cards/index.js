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

function cardComponent(obj) {
  // Creating elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  // Adding classes and properties
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  headline.textContent = `${obj.headline}`; 
  img.setAttribute('href', `${obj.authorPhoto}`) 
  span.textContent = `By ${obj.authorName}`

  // Combining elements
  card.append(headline, author);
  author.append(imgContainer, span);
  imgContainer.append(img);

  // console.log(card);
  return card;
}

const cardContainer = document.querySelector('cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  // console.log(response.data.articles);
  response.data.articles.bootstrap.forEach(article => {
    console.log(article.headline);
    cardContainer.append(cardComponent(article));
  })
  // console.log(data);
  // data.forEach(article => {
  //   // cardContainer.append(cardComponent(article));
  //   console.log(article);
  // })
})
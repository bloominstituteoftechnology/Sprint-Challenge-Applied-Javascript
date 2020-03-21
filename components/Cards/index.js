
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

//create card container 
const cardsContainer = document.querySelector('.cards-container');

//Create document fragment
const cardsFragment = document.createDocumentFragment();

//reference article API 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
   
    for (let articleTopic in response.data.articles) {
      response.data.articles[articleTopic].forEach(article => {
        if (articleTopic === 'node') {
          articleTopic = 'nodejs';
        }

        const articleCard = Card(article);
        articleCard.setAttribute('data-topic', `${articleTopic}`);

        cardsFragment.appendChild(articleCard);

      });
    }

    // Add to the DOM via appendChild
    cardsContainer.appendChild(cardsFragment);

  })
  .catch(error => console.log(error));

//Card creation component.
//Takes in data from API call and creates the correct element tree for a card
function Card(cardInfo) {
  //Card container element
  const card = document.createElement('div');
  card.className = 'card';

  //Headline text from API data
  const headline = document.createElement('div');
  headline.className = 'headline';
  headline.innerText = cardInfo.headline;

  card.appendChild(headline);

  //Author parent container element
  const author = document.createElement('div');
  author.className = 'author';

  //Author profile pic container element
  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';

  //Author pic from API
  const img = document.createElement('img');
  img.setAttribute('src', cardInfo.authorPhoto);

  imgContainer.appendChild(img);

  author.appendChild(imgContainer);

  //reference author's  name from API
  const name = document.createElement('span');
  name.textContent = `Author:  ${cardInfo.authorName}`;

  author.appendChild(name);

  card.appendChild(author);

  return card;
}
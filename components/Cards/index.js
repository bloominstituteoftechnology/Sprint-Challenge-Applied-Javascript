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
const cardContainer = document.querySelector('.cards-container')

function Card(arr) {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthorDiv = document.createElement('div');
    const cardImgDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardAuthor = document.createElement('span')

    cardHeadline.textContent = arr.headline;
    cardImg.src = arr.authorPhoto;
    cardAuthor.textContent = arr.authorName;

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardImgDiv.classList.add('img-container');
    cardAuthorDiv.classList.add('author')

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthorDiv);
    cardAuthorDiv.appendChild(cardImgDiv);
    cardImgDiv.appendChild(cardImg)
    cardAuthorDiv.appendChild(cardAuthor);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        const articles = response.data.articles;
        const articlesKeys = Object.keys(articles);
        articlesKeys.forEach(key => {
            // console.log(articles[key]);
            articles[key].forEach(article => {
                cardContainer.appendChild(Card(article))
            })
        });
        console.log(Object.keys(articles));
    })
    .catch(error => console.log('error :', error))
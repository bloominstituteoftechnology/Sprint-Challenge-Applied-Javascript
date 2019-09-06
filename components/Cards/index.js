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

function cardsFromTopic(data) {
    data.forEach((article) => Card(article));
}

const cardsData = 
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        
        .then(response => {
            const articles = response.data.articles;
            articleKeys = Object.keys(articles);
            topicsArr = [];
            articleKeys.forEach((key) => topicsArr.push(articles[key]));
            for (let i = 0; i < topicsArr.length; i++) {
                for (let j = 0; j < topicsArr[i].length; j++) {
                    let newCard = Card(topicsArr[i][j]);
                    newCard.classList.add(articleKeys[i]);
                }
            }
        })

        .catch(error => console.log(error));

function Card(data) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = data.headline;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');

    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');

    const authorImg = document.createElement('img');
    authorImg.setAttribute("src", data.authorPhoto);

    const authorSpan = document.createElement('span');
    authorSpan.textContent = data.authorName;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv);
    imgContainerDiv.appendChild(authorImg);
    authorDiv.appendChild(authorSpan);

    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.appendChild(cardDiv);

    return cardDiv;

}


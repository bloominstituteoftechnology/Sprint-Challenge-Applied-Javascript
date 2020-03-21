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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {

    const javascript = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const technology = response.data.articles.technology;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;

    javascript.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    bootstrap.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    technology.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    jquery.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    node.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
})

.catch((error) => {
    console.log(error);
})

function articleCard(headText, imgsrc, aName) {
    const cardContainer = document.querySelector('.cards-container');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardContainer.appendChild(cardDiv);

    const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = headText;
    cardDiv.appendChild(headLine);

    const author = document.createElement('div');
    author.classList.add('author');
    cardDiv.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const authorImg = document.createElement('img');
    authorImg.src = imgsrc;
    imgContainer.appendChild(authorImg);

    const authorsName = document.createElement('span');
    authorsName.textContent = aName;
    author.appendChild(authorsName);

    return cardDiv;
}
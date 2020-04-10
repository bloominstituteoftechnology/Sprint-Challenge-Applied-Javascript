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

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const topics = response.data.articles;
        topics.javascript.forEach(item => {
            articleParent.appendChild(createDogArticle(item));
        });
        topics.bootstrap.forEach(item => {
            articleParent.appendChild(createDogArticle(item));
        });
        topics.technology.forEach(item => {
            articleParent.appendChild(createDogArticle(item));
        });
        topics.jquery.forEach(item => {
            articleParent.appendChild(createDogArticle(item));
        });
        topics.node.forEach(item => {
            articleParent.appendChild(createDogArticle(item));
        })
    })
    .catch(err => {
        console.log(err, 'failed to retrieve data')
    })

const articleParent = document.querySelector('.cards-container');
function createDogArticle(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = data.authorPhoto;
    headline.textContent = data.headline;
    authorName.textContent = `By ${data.authorName}`;
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);
    return card;
}
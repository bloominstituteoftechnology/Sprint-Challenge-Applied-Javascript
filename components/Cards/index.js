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

const cardDom = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {

    const js = Object.entries(response.data.articles.javascript);
    const bootstrap = Object.entries(response.data.articles.bootstrap);
    const jquery = Object.entries(response.data.articles.jquery);
    const node = Object.entries(response.data.articles.node);
    const technology = Object.entries(response.data.articles.technology);

    const topics = [js, bootstrap, jquery, node, technology];

    topics.forEach((article) => {
        article.forEach((otherArticle) => {
            cardDom.append(Cards(otherArticle));
        })
    })
})

.catch((err) => {
    console.log(`There was an error getting the cards `, err);
});

// Couldn't get this way to work :/

// .then((response) => {
//     const cardObj = response.data.articles;
//     cardObj.forEach((article) => {
//         cardsDom.append(Cards(article))
//     })
// })

// .catch((err) => {
//     console.log(`There was an error getting the cards `, err);
// });



function Cards (art) {
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

    headline.textContent = art[1].headline;
    img.src = art[1].authorPhoto;
    authorName.textContent = art[1].authorName;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    author.append(authorName);

    return card;


}

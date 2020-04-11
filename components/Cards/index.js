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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    
let javascript = response.data.articles.javascript;
javascript.forEach(moreData => {
    let newCard = myCards(moreData);
    let cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
});
let bootstrap = response.data.articles.bootstrap;
bootstrap.forEach(moreData => {
    let newCard = myCards(moreData);
    let cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
let technology = response.data.articles.technology;
technology.forEach(moreData => {
    let newCard = myCards(moreData);
    let cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
let jquery = response.data.articles.jquery;
jquery.forEach(moreData => {
    let newCard = myCards(moreData);
    let cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
let nodeJs = response.data.articles.nodeJs;
nodeJs.forEach(moreData => {
let newCard = myCards(moreData);
let cardContainer = document.querySelector('.cards-container');
cardContainer.appendChild(newCard);
})
} )
.catch(error => {
    console.log(error);
})
function myCards(data){
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let author = document.createElement('div');
    let img = document.createElement('div');
    let authorImg = document.createElement('img');
    let authorName = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    img.classList.add('img-container');
    
    cardHeadline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;


    card.appendChild(cardHeadline);
    card.appendChild(author);
    author.appendChild(img);
    img.appendChild(authorImg);
    author.appendChild(authorName);
    
    return card;
};







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

function cardGen(headline, author, url){
    card = document.createElement('div');
    card.classList.add('card');

    cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = headline;

    cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');

    cardImg = document.createElement('div');
    cardImg.classList.add('img-container');

    cardUrl = document.createElement('img');
    cardUrl.setAttribute("src", url);

    cardAuthorName = document.createElement('span')
    cardAuthorName.textContent = author;

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);

    cardAuthor.appendChild(cardImg);
    cardImg.appendChild(cardUrl);
    cardAuthor.appendChild(cardAuthorName);
    
    return card;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (response =>{
    response.data.articles.bootstrap.forEach(item => {
        document.querySelector('.cards-container').appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });
    response.data.articles.javascript.forEach(item => {
        document.querySelector('.cards-container').appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });

    response.data.articles.technology.forEach(item => {
        document.querySelector('.cards-container').appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });

    response.data.articles.jquery.forEach(item => {
        document.querySelector('.cards-container').appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });

    let node = "node.js";

    response.data.articles.node.forEach(item => {
        document.querySelector('.cards-container').appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });

    console.log(response.data);
})

.catch (err => {
    console.log("Error:", err);
});

/**
 *     response.data.articles.forEach(item => {
        document.body.appendChild(
            cardGen(
                item.headline,
                item.authorName,
                item.authorPhoto
            )
        )
        
    });
 */
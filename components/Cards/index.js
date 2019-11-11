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

// function articleCard(authorName, authorPhoto, headline) {
//     const mainCard = document.createElement('div');
//     const headlinediv = document.createElement('div');
//     const author = document.createElement('div');
//     const imgcontainer = document.createElement('div');
//     const img = document.createElement('img');
//     const spanby = document.createElement('span');

//     newCard.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imgcontainer.classList.add('img-container');

//     headline.textContent = headline;
//     img.src = authorPhoto;
//     spanby.textContent = authorName;


//     mainCard.appendChild(headlinediv);
//     mainCard.appendChild(author);
//     author.appendChild(imgcontainer);
//     author.appendChild(spanby);
//     imgcontainer.appendChild(img);

//     return mainCard;
// };

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (response => {

    function articleCard(authorName, authorPhoto, headline) {
        const mainCard = document.createElement('div');
        const headlinediv = document.createElement('div');
        const author = document.createElement('div');
        const imgcontainer = document.createElement('div');
        const img = document.createElement('img');
        const spanby = document.createElement('span');
    
        mainCard.classList.add('card');
        headlinediv.classList.add('headline');
        author.classList.add('author');
        imgcontainer.classList.add('img-container');
    
        headlinediv.textContent = headline;
        img.src = authorPhoto;
        spanby.textContent = authorName;
    
    
        mainCard.appendChild(headlinediv);
        mainCard.appendChild(author);
        author.appendChild(imgcontainer);
        author.appendChild(spanby);
        imgcontainer.appendChild(img);
    
        return mainCard;
    };

    response.data.articles.bootstrap.forEach(data => {
        const newCard = articleCard(data.authorName, data.authorPhoto, data.headline)
        const cardscontainer = document.querySelector('.cards-container');
        cardscontainer.appendChild(newCard);
    })

    response.data.articles.javascript.forEach(data => {
        const newCard = articleCard(data.authorName, data.authorPhoto, data.headline)
        const cardscontainer = document.querySelector('.cards-container');
        cardscontainer.appendChild(newCard);
    })

    response.data.articles.jquery.forEach(data => {
        const newCard = articleCard(data.authorName, data.authorPhoto, data.headline)
        const cardscontainer = document.querySelector('.cards-container');
        cardscontainer.appendChild(newCard);
    })

    response.data.articles.node.forEach(data => {
        const newCard = articleCard(data.authorName, data.authorPhoto, data.headline)
        const cardscontainer = document.querySelector('.cards-container');
        cardscontainer.appendChild(newCard);
    })

    response.data.articles.technology.forEach(data => {
        const newCard = articleCard(data.authorName, data.authorPhoto, data.headline)
        const cardscontainer = document.querySelector('.cards-container');
        cardscontainer.appendChild(newCard);
    })

    console.log(response);
})
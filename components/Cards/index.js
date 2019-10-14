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


function CreateCard (data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const authorImg = document.createElement('img');
    authorImg.src = data.authorPhoto;

    const authorName = document.createElement('span');
    authorName.textContent = data.authorName;

    card.append(headline); 
    card.append(author);

    author.append(imgContainer);
    author.append(authorName);

    imgContainer.append(authorImg);

    const cardsContainer = document.querySelector('.cards-container'); 
    cardsContainer.append(card); 

    return card;

}


axios.get('https://lambda-times-backend.herokuapp.com/articles') 
    .then((response) => { 
        console.log(response);
        response.data.articles.javascript.forEach(article => CreateCard(article));
        response.data.articles.bootstrap.forEach(article => CreateCard(article));
        response.data.articles.jquery.forEach(article => CreateCard(article));
        response.data.articles.node.forEach(article => CreateCard(article));
        response.data.articles.technology.forEach(article => CreateCard(article));
    })

    .catch((err) => { 
        console.log(err) 
    })
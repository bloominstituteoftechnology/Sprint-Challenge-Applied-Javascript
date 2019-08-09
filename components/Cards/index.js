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

const cardsX = document.querySelector('.cards-container');
// cardsX.appendChild(component('testing')) -- test passed

// https://lambda-times-backend.herokuapp.com/articles
const a = axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(x => {
    Object.keys(x.data.articles).forEach(z => {
        return new component(x.data.articles[z], z);
    });
})

.catch(x => {
    console.log('Error, please try again later.')
});

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

function component(obj, c) {
    obj.forEach(x => { 
    let cardX = document.createElement('div');
    cardX.classList.add('card'); 
    cardsX.appendChild(cardX);

    let headlineX = document.createElement('div');
    headlineX.classList.add('headline');
    headlineX.textContent = x.headline;
    cardX.appendChild(headlineX);

    let name = document.createElement('div');
    name.classList.add('author');
    cardX.appendChild(name);

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    name.appendChild(imgContainer);

    let image = document.createElement('img');
    image.src = x.authorPhoto;
    imgContainer.appendChild(image);
    

    let authorX = document.createElement('span');
    authorX.textContent = `by: ${x.authorName}`;
    name.appendChild(authorX);

     });
}


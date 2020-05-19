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

let cardsEntry = document.querySelector('.cards-container')
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( (response) => {
    console.log(response.data)
    let articleKeys = Object.keys(response.data.articles)
  articleKeys.forEach((key) => {
     response.data.articles[key].forEach((object) =>{
         cardsEntry.append(cardMaker(object))
     })
     
  })
})
.catch((error) => {
    console.log("The data was not returned", error);
})

function cardMaker(object){
const carddiv = document.createElement('div');
const titlediv = document.createElement('div');
const infodiv = document.createElement('div');
const imagediv = document.createElement('div');
const picture = document.createElement('img');
const namespan = document.createElement('span');

carddiv.classList.add('card');
titlediv.classList.add('headline');
infodiv.classList.add('author');
imagediv.classList.add('img-container');


titlediv.textContent = object.headline;
infodiv.textContent = object.author;
namespan.textContent = `${object.authorName}`;
picture.src = object.authorPhoto;

carddiv.append(titlediv);
carddiv.append(infodiv);
infodiv.append(imagediv);
carddiv.append(namespan);
imagediv.append(picture);


return carddiv;
}

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
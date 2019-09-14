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

function cardMaker(arr){
    // create all elements
    const newCard = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImg = document.createElement('div');
    const cardPic =document.createElement('img');
    const authorName =document.createElement('span');

    // create structure
    newCard.appendChild(cardHeadline);
    newCard.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImg);
    cardImg.appendChild(cardPic);
    cardImg.appendChild(authorName);

    // set the content
    cardHeadline.textContent= arr.headline
    cardPic.setAttribute('src', arr.authorPhoto)
    authorName.textContent = `By ${arr.authorName}`

    // apply styles
    newCard.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImg.classList.add('img-container');
    
    return newCard;
}

//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(arr =>{
    console.log(arr.data.articles)
   const cardsContainer = document.querySelector('.cards-container')
    
    articleKeys = Object.keys(arr.data.articles)
    
    articleKeys.forEach(element => {
      console.log(arr.data.articles[element])
      arr.data.articles[element].forEach(x => {
        cardsContainer.appendChild(cardMaker(x))
      })
    });
})
.catch(err => 
  console.log(err))
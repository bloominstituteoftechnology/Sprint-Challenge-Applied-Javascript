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
        console.log(response);
    })
    .catch(err => {
        console.log('Error', err);
    });



let cardMaker = (object) => {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    let headline = document.createElement('div');
    headline.classList.add('headline');
    let author = document.createElement('div');
    author.classList.add('author');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    let image = document.createElement('img');
    let aName = document.createElement('span');

    let parent = document.querySelector('.cards-container');
    parent.appendChild(newCard);
    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(aName);

    return newCard;
}

cardMaker(Object);
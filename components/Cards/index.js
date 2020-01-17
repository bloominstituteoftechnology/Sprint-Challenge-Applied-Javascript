// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    const cardsContainer = document.querySelector('.cards-container')
    const values = Object.values(response.data.articles);
    console.log("Card response", response)
    values.forEach(item => {
    item.forEach(article => {
    cardsContainer.appendChild(createCard(article))
    console.log("Card")
    })
})
})

.catch(error => {
console.log("Surprise, nothing works.", error)
})



    



function createCard (object) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          imgSrc = document.createElement('img'),
          span = document.createElement('span')

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = object.headline;
    imgSrc.src = object.authorPhoto;
    span.textContent = `By ${object.authorName}`;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(imgSrc);
    author.append(span);

    return card
};
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
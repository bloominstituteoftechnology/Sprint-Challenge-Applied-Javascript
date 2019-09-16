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

const cardContainer = document.querySelector('.cards-container')

let propContainer = [];
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {

    for (prop in res.data.articles) {
        propContainer.push(prop);
    }
    propContainer.forEach(cur => {
        res.data.articles[cur].forEach( item => {
            cardContainer.appendChild(cardMaker(item));
        })
    })
})
.catch(err => {
    console.log(err);
})

const cardMaker = arr => {
    const main = document.createElement('div');
    main.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = arr.headline;
    main.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    main.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = arr.authorPhoto;
    imgContainer.appendChild(img);

    const span = document.createElement('span');
    span.textContent = `By ${arr.authorName}`;
    author.appendChild(span);

    return main;
}
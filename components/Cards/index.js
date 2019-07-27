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
 
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
//     .then(data => {
//         console.log('Works! here is the list of articles: ', data.data);
//         const cards = document.querySelector('.card-container');
//         cards.appendChild(createCard(data.data));
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//     })


// function createCard(data) {

//     //elements
//     const card = document.createElement('div');
//     const headline = document.createElement('div');
//     const author = document.createElement('div');
//     const imgContainer = document.createElement('div');
//     const userImg = document.createElement('a');
//     const authorName = document.createElement('span');

//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imgContainer.classList.add('img-container');

//     userImg.textContent = `<a href=${data.authorPhoto_url}`;
//     author.textContent = `${data.authorName}`





//     return card;


// }

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( data => {
        console.log('The Cards API is working Correctly', data);
        const articles = data.data.articles;
        const Cards = document.querySelector('.cards-container');
        console.log(articles);

        articles.bootstrap.forEach(card => {
            Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

        })

        articles.javascript.forEach(card => {
            Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

        })

        articles.jquery.forEach(card => {
            Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

        })

        articles.node.forEach(card => {
            Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

        })

        articles.technology.forEach(card => {
            Cards.appendChild(createCard(card.headline, card.authorPhoto, card.authorName));

        })
    })
    .catch( error => {
        console.log("Error, not able to pull the Cards API Information", error);
    })


    

function createCard(articleHeadline, authorImg, nameOfAuthor) {


    const newCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const byauthor = document.createElement('span');

    newCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headline.textContent = articleHeadline;
    author.textContent = nameOfAuthor;
    authorImage.src = authorImg;
    console.log(authorImg);

    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(byauthor);


    return newCard;
}

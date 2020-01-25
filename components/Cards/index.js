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

function articleCreator(x){
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let authorsImg = document.createElement('img');
    let authorsName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    headline.textContent = `${x.headLine}`
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    authorsImg.src = `${x.authorPhoto}`;
    authorsName.textContent = `${x.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorsImg);
    author.appendChild(authorsName);

    return card;
}

const cardsContainer = document.querySelector('.cards-container')

const promiseTwo = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        for(let i in response.data.articles){
            i.forEach(y => {
                cardsContainer.appendChild(articleCreator(y))
            });
        }
    })

        
    
   

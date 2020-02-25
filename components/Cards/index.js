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

function CreateCard(item) {
    //define new elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const byAuthor = document.createElement('span');
    
    //setup the structure of elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(byAuthor);
    imgCont.appendChild(img);

    //add classes to element
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    
    //set text content
    headline.textContent = item.headline;
    img.src = item.authorPhoto;
    byAuthor.textContent = item.authorName;


    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( (response) => { 
        console.log(response.data.articles.javascript)
        // deal with the response data in here
        response.data.articles.javascript.forEach((item) => {
            let newerCard = CreateCard(item);
            cardContainer.appendChild(newerCard)
        })
        console.log(response);
    })
    .catch( err => {
        // deal with the error in here
        console.log("There is an error: ", err);
    })

    const cardContainer = document.querySelector('.cards-container');
    // cardContainer.appendChild(articles);

// const cards = document.getElementsByClassName('card');
// cards.forEach(dataset  => {
//   articles.appendChild(newArticle(dataset));
// })
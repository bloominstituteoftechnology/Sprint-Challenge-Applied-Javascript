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

 //grab card container 
    const getCardsContainer = document.querySelector('.cards-container');    

function cardMaker(data) 
{    
    const cardDiv     = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv   = document.createElement('div');
    const imgDiv      = document.createElement('div');
    const makeImage   = document.createElement('img');
    const makeSpan    = document.createElement('span');

    //add classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    //add text
    headlineDiv.textContent = data.headline;
    imgDiv.textContent      = data.authorPhoto;
    makeSpan.textContent    = data.authorName;

    //add elements to the page
    //div stacking build
    getCardsContainer.appendChild(cardDiv);
        cardDiv.appendChild(headlineDiv); 
            headlineDiv.appendChild(authorDiv);
                headlineDiv.appendChild(makeSpan); //nested content element
                authorDiv.appendChild(imgDiv);
                    imgDiv.appendChild(makeImage);     // nested content element

    
    return cardDiv;

}



axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((resolve) => {
    const articles = resolve.data.articles;
    const entries = Object.entries(articles);

    for(const key of entries) {
        const data = key[1]
        data.forEach(item => {
            cardsContainer.appendChild(createCard(item));
        })
    }
})

.catch(error => {
    log("DOES NOT COMPUTE!" error);
});

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles  x
// Study the response data you get back, closely.  x
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

const cardContainer = document.querySelector('.cards-container')

async function getArticles(){
    const articleData = await axios.get('https://lambda-times-backend.herokuapp.com/articles')
    const response    = await articleData.data.articles
    const data        =  [...response.bootstrap, ...response.javascript, ...response.jquery, ...response.node, ...response.technology ]
    
    data.forEach(element => {
        cardContainer.appendChild(CardComponent(element))
    });
    
}

getArticles()

function CardComponent(data) {
    const { authorName, authorPhoto, headline } = data
    const card = document.createElement('div')
    card.classList = 'card'
    card.innerHTML += `
    <div class="headline">${headline}</div>
    <div class="author">
        <div class="img-container">
           <img src=${authorPhoto} />
        </div>
        <span>By ${authorName}</span>
    </div>
    `
    return card
}



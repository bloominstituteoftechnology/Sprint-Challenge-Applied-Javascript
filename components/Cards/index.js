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

const cardsContainer = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    //console.log(res.data);
    lambdaTimes(res.data).forEach((card) => {
        console.log(card)
    })
        
   
    
})
.catch(err => {
    console.log(err);
});

function lambdaTimes(article) {

    const articles = article.data.articles; 
    const javaArt = articles.javascript; 
    const bootArt = articles.bootstrap; 
    const tectArt = articles.technology; 
    const jArt = articles.jquery; 
    const nArt = articles.node;

    const cards = []

    const javascriptCard = javaArt.map((article) => {
        cards.push(card);
    });

    const bootstrapCard = bootArt.map((article) => {
        cards.push(card);
    });

    const technologyCard = tectArt.map((article) => {
        cards.push(card)
    });

    const jqueryCard = jArt.map((article) => {
        cards.push(card)
    });

    const nodeCard = nArt.map((article) => {
        cards.push(card);
    })

    const card = document.createElement('div'); 
    const headline = document.createElement('div');
    const author = document.createElement('div'); 
    const imgContainer = document.createElement('div');
    const img = document.createElement('img'); 
    const span = document.createElement('span'); 

    card.classList.add('card'); 
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container'); 
    span.classList.add('span');

    headline.textContent = articles.headline;
    span.textContent = articles.authorName
    img.src = articles.authorPhoto

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    
    return card, cards, javascriptCard, bootstrapCard, technologyCard, jqueryCard, nodeCard; 

}



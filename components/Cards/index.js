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
    console.log(res);
    lambdaTimes(res).forEach((card) => {
        console.log(card)
        cardsContainer.append(card);
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

    const cards = [];

    

    const javascriptCard = javaArt.map((article) => {
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

        headline.textContent = article.headline;
        img.src = article.authorPhoto
        span.textContent = article.authorName
        

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(span);
        cards.push(card);

    });
    console.log(javascriptCard);

    const bootstrapCard = bootArt.map((article) => {
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

        headline.textContent = article.headline;
        span.textContent = article.authorName
        img.src = article.authorPhoto

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(span);
        cards.push(card);
    });
    console.log(bootstrapCard)
    

    const technologyCard = tectArt.map((article) => {
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

        headline.textContent = article.headline;
        span.textContent = article.authorName
        img.src = article.authorPhoto

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(span);
        cards.push(card)
    });
    console.log(technologyCard)

    const jqueryCard = jArt.map((article) => {
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

        headline.textContent = article.headline;
        span.textContent = article.authorName
        img.src = article.authorPhoto

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(span);
        cards.push(card)
    });
    console.log(jqueryCard)

    const nodeCard = nArt.map((article) => {
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

        headline.textContent = article.headline;
        span.textContent = article.authorName
        img.src = article.authorPhoto

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(span);
        cards.push(card);
        
    });
    console.log(nodeCard)
    return cards;
}




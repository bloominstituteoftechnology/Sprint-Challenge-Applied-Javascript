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

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(item => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let authorCont = document.createElement('div');
        let imgCont = document.createElement('div');
        let imgUrl = document.createElement('img') 
        let authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        authorCont.classList.add('author');
        imgCont.classList.add('img-container');

        card.appendChild(headline);
        card.appendChild(authorCont);
        authorCont.appendChild(imgCont);
        authorCont.appendChild(authorName);
        imgCont.appendChild(imgUrl);

        headline.textContent = item.headline;
        imgUrl.src = item.authorPhoto;
        authorName.textContent = item.authorName;

        let cardEntry = document.querySelector('.cards-container');
        
        cardEntry.appendChild(card);

    });

    response.data.articles.bootstrap.forEach(item => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let authorCont = document.createElement('div');
        let imgCont = document.createElement('div');
        let imgUrl = document.createElement('img') 
        let authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        authorCont.classList.add('author');
        imgCont.classList.add('img-container');

        card.appendChild(headline);
        card.appendChild(authorCont);
        authorCont.appendChild(imgCont);
        authorCont.appendChild(authorName);
        imgCont.appendChild(imgUrl);

        headline.textContent = item.headline;
        imgUrl.src = item.authorPhoto;
        authorName.textContent = item.authorName;

        let cardEntry = document.querySelector('.cards-container');
        
        cardEntry.appendChild(card);

    });

    response.data.articles.technology.forEach(item => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let authorCont = document.createElement('div');
        let imgCont = document.createElement('div');
        let imgUrl = document.createElement('img') 
        let authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        authorCont.classList.add('author');
        imgCont.classList.add('img-container');

        card.appendChild(headline);
        card.appendChild(authorCont);
        authorCont.appendChild(imgCont);
        authorCont.appendChild(authorName);
        imgCont.appendChild(imgUrl);

        headline.textContent = item.headline;
        imgUrl.src = item.authorPhoto;
        authorName.textContent = item.authorName;

        let cardEntry = document.querySelector('.cards-container');
        
        cardEntry.appendChild(card);

    });

    response.data.articles.jquery.forEach(item => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let authorCont = document.createElement('div');
        let imgCont = document.createElement('div');
        let imgUrl = document.createElement('img') 
        let authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        authorCont.classList.add('author');
        imgCont.classList.add('img-container');

        card.appendChild(headline);
        card.appendChild(authorCont);
        authorCont.appendChild(imgCont);
        authorCont.appendChild(authorName);
        imgCont.appendChild(imgUrl);

        headline.textContent = item.headline;
        imgUrl.src = item.authorPhoto;
        authorName.textContent = item.authorName;

        let cardEntry = document.querySelector('.cards-container');
        
        cardEntry.appendChild(card);

    });

    response.data.articles.node.forEach(item => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let authorCont = document.createElement('div');
        let imgCont = document.createElement('div');
        let imgUrl = document.createElement('img') 
        let authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        authorCont.classList.add('author');
        imgCont.classList.add('img-container');

        card.appendChild(headline);
        card.appendChild(authorCont);
        authorCont.appendChild(imgCont);
        authorCont.appendChild(authorName);
        imgCont.appendChild(imgUrl);

        headline.textContent = item.headline;
        imgUrl.src = item.authorPhoto;
        authorName.textContent = item.authorName;

        let cardEntry = document.querySelector('.cards-container');
        
        cardEntry.appendChild(card);

    });

});
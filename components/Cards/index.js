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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console.log(response);
        
        const articles = response.data.articles;
        const entries = Object.entries(articles)
        //console.log(entries)
        
        for(const key of entries) {
            const data = key[1]
            data.forEach(item => {
                cardsContainer.appendChild(createCard(item))
                
            });
        }
   
   
    })
    .catch( error => {
        console.log(error)
    })

    function createCard(object1) {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imgContainter = document.createElement('div');
        const img = document.createElement('img');
        const span1 = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainter.classList.add('img-container');

        headline.textContent = object1.headline;
        span1.textContent = object1.authorName;
        img.src = object1.authorPhoto;
        
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainter);
        imgContainter.appendChild(img);
        card.appendChild(span1);

        return card;

    }

    const cardsContainer =document.querySelector('.cards-container');
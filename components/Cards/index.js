// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then( function (response) 
    {
        console.log(response);
        // Javascript
         for(let i = 0; i < response.data.articles.javascript.length; i++)
         {
            cardCreator(response.data.articles.javascript[i]);
         }
        //bootstrap
         for(let i = 0; i < response.data.articles.bootstrap.length; i++)
         {
            cardCreator(response.data.articles.bootstrap[i]);
         }
        //technology
         for(let i = 0; i < response.data.articles.technology.length; i++)
         {
            cardCreator(response.data.articles.technology[i]);
         }
         //jquery
         for(let i = 0; i < response.data.articles.jquery.length; i++)
         {
            cardCreator(response.data.articles.jquery[i]);
         }
         //node 
         for(let i = 0; i < response.data.articles.node.length; i++)
         {
            cardCreator(response.data.articles.node[i]);
         }

    })

    .catch( function (error) {
        console.log(error);
    })

    // <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

function cardCreator(element) {
    const card = document.createElement('div');
    card.classList.add('card');
    const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = element.headline;
    const author = document.createElement('div');
    author.classList.add('author');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    const img = document.createElement('img');
    image.src = element.authorPhoto;
    const authorName = document.createElement('span');
    authorName.textContent = `By ${element.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorName);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(card);

    return card;

}
cardCreator();
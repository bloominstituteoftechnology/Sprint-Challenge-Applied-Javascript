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
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res=>{
    console.log('here is cards ',res);
    res.data.articles.javascript.map(item=>{
        cardsContainer.appendChild(CreateCard(item));
    });
    res.data.articles.bootstrap.map(item=>{
        cardsContainer.appendChild(CreateCard(item));
    });
    res.data.articles.technology.map(item=>{
        cardsContainer.appendChild(CreateCard(item));
    });
    res.data.articles.jquery.map(item=>{
        cardsContainer.appendChild(CreateCard(item));
    });
    res.data.articles.node.map(item=>{
        cardsContainer.appendChild(CreateCard(item));
    });

});


function CreateCard(item){
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgpic = document.createElement('img');
    const spantag = document.createElement('span');

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(spantag);
    imgContainer.appendChild(imgpic);


   cardDiv.classList.add('card');
   headline.classList.add('headline');
   author.classList.add('author');
   imgContainer.classList.add('img-container');

   headline.textContent = item.headline;
   imgpic.src = item.authorPhoto;
   spantag.textContent = item.authorName;

   return cardDiv;

}
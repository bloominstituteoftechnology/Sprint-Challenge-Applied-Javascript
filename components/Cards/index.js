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

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then( function (resp) 
{
    console.log(resp);
   
     for(let i = 0; i < resp.data.articles.javascript.length; i++)
     {
        cardCreator(resp.data.articles.javascript[i]);
     }
    
     for(let i = 0; i < resp.data.articles.bootstrap.length; i++)
     {
        cardCreator(resp.data.articles.bootstrap[i]);
     }
   
     for(let i = 0; i < resp.data.articles.technology.length; i++)
     {
        cardCreator(resp.data.articles.technology[i]);
     }
    
     for(let i = 0; i < resp.data.articles.jquery.length; i++)
     {
        cardCreator(resp.data.articles.jquery[i]);
     }
   
     for(let i = 0; i < resp.data.articles.node.length; i++)
     {
        cardCreator(resp.data.articles.node[i]);
     }
 

})
 

.catch( function (err) {
    console.log(err);
})
 
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
img.src = element.authorPhoto;
 
const authorName = document.createElement('span');
authorName.textContent = `By ${element.authorName}`;
 

card.appendChild(headLine);
card.appendChild(author);
author.appendChild(imageContainer);
imageContainer.appendChild(img);
author.appendChild(authorName);
 

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.appendChild(card);
 

return card;
}
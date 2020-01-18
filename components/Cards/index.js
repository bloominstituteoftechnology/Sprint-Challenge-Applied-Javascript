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

const cardsEntryPoint = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
                  
       response.data.articles.bootstrap.forEach(item => {
            const newArticleCard = Card(item);
            cardsEntryPoint.appendChild(newArticleCard);
        })

        response.data.articles.javascript.forEach(item => {
            const newArticleCard = Card(item);
            cardsEntryPoint.appendChild(newArticleCard);
        })

        response.data.articles.jquery.forEach(item => {
            const newArticleCard = Card(item);
            cardsEntryPoint.appendChild(newArticleCard);
        })

        response.data.articles.node.forEach(item => {
            const newArticleCard = Card(item);
            cardsEntryPoint.appendChild(newArticleCard);
        })

        response.data.articles.technology.forEach(item => {
            const newArticleCard = Card(item);
            cardsEntryPoint.appendChild(newArticleCard);
            //console.log(item);
        })
        //console.log(response);
    })

   

function Card(finalResponse){
    const 
        newCard = document.createElement('div'),
        newHeadline = document.createElement('div'),
        newAuthorContainer = document.createElement('div'),
        newImageContainer = document.createElement('div'),
        newImage = document.createElement('img'),
        newAuthor = document.createElement('span');
    
    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthorContainer.classList.add('author');
    newImageContainer.classList.add('img-container');

    newCard.append(newHeadline, newAuthorContainer);
    newAuthorContainer.append(newImageContainer, newAuthor);
    newImageContainer.appendChild(newImage);
    
    newHeadline.textContent = finalResponse.headline;
    newImage.src = finalResponse.authorPhoto;
    newAuthor.textContent = `By ${finalResponse.authorName}`;
    
    return newCard;
}
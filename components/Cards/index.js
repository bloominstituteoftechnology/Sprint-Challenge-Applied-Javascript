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
    .then((res) => {
        console.log ("Res: ", res)
        res.data.articles.javascript.forEach((url) => {
        cardsContainer.appendChild(Cards(url));
        });
    })
    .catch( err => {
        console.log("Error: ", err)
    })

    function Cards(headline,author,img) {
        let cardCreate = document.createElement('div');
        let cardAuthor =  document.createElement('span');
        let cardHeadline = document.createElement('h2');
        let cardAuthorImg = document.createElement('img');
        
        cardAuthor.classList.add('author');
        cardHeadline.classList.add('headline');
        cardAuthorImg.classList.add('img-container');
    
    
         cardAuthor.textContent = res.data.article.authorName;
         cardHeadline.textContent =  res.data.article.headline;
         cardAuthorImg.textContent = res.data.article.authorPhoto;
    
         cardCreate.appendChild(headerDate);
         cardCreate.appendChild(headerTitle);
         cardCreate.appendChild(headerTemp);
    
         return cardCreate;
    };

    let cardsContainer = document.querySelector('.cards-container');
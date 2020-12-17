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
let articlesArray = [];
let cardsContainer = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log ("Res: ", res) 
        articlesArray = res.data.articles;    
        let javascriptArt = articlesArray.javascript;
        let bootstraptArt = articlesArray.bootstrap;
        let technologyArt = articlesArray.technology;
        let jqueryArt = articlesArray.jquery;
        let nodeArt = articlesArray.node;
         
        javascriptArt.forEach((data) => {
            cardsContainer.appendChild(Cards(data));
        });

        bootstraptArt.forEach((data) => {
            cardsContainer.appendChild(Cards(data));
        });

        technologyArt.forEach((data) => {
            cardsContainer.appendChild(Cards(data));
        });

        jqueryArt.forEach((data) => {
            cardsContainer.appendChild(Cards(data));
        });

        nodeArt.forEach((data) => {
            cardsContainer.appendChild(Cards(data));
        });

       
        console.log(javascriptArt);
        // articlesArray.javascript.forEach((url) => {
        // cardsContainer.appendChild(Cards(url));
        // });
    })
    .catch( err => {
        console.log("Error: ", err)
    })
    


    function Cards(article) {
        let cardCreate = document.createElement('div');
        let cardAuthor =  document.createElement('span');
        let cardHeadline = document.createElement('h2');
        let cardAuthorImg = document.createElement('img');
        
        cardCreate.classList.add('card');
        cardAuthor.classList.add('author');
        cardHeadline.classList.add('headline');
        cardAuthorImg.classList.add('img-container');
    
        
        cardAuthor.textContent = article.authorName;
        cardHeadline.textContent = article.headline;
        cardAuthorImg.src = article.authorPhoto;
    
        cardCreate.appendChild(cardAuthor);
        cardCreate.appendChild(cardHeadline);
        cardCreate.appendChild(cardAuthorImg);

        

    
        return cardCreate;
    };

    
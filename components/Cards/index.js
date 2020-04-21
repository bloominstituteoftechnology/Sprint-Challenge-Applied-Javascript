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

function articleCard(headline, imgUrl, author){
    const article = document.createElement('div');
    const articleHeadLine = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImgContainer = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleSpan = document.createElement('span');

    article.classList.add('card');
    articleHeadLine.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImgContainer.classList.add('img-container');
    articleImg.src = imgUrl;

    article.appendChild(articleHeadLine);
    article.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgContainer);
    articleAuthor.appendChild(articleSpan);
    articleImgContainer.appendChild(articleImg);

    console.log(axios)
}

// articleCard();
const entryPoint = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( (response) => {
    console.log(response.data)
    response.data.articls.forEach( (imgUrl) => {
    const newArticleCard = articleCard(headline, imgUrl, author);
    entryPoint.appendChild(newArticleCard);
        })
    })
    .catch( (err) => {
    console.log("the data was not returned", err)
    })
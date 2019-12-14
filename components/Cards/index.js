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

    ///////////////// .cards-container Element /////////////////
const cardsContainer = document.querySelector('.cards-container');


    ///////////////// Axios /////////////////
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
        .then((response) => {
            // console.log(response);
            const articles = response.data.articles;
            Object.keys(articles).forEach((category) => {
                articles[category].forEach(article => cardsContainer.appendChild(cardCreator(article.headline, article.authorPhoto, article.authorName)));
            })
        })


    ///////////////// Create Card Component /////////////////
function cardCreator (articleHeadline, articleAuthorPhoto, articleAuthorName){
    ///////////////// Create Elements /////////////////
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const writtenBy = document.createElement('span');

    ///////////////// Add Classes /////////////////
    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    ///////////////// Add Attributes /////////////////
    authorImg.src = articleAuthorPhoto;

    ///////////////// Add Content /////////////////
    headline.textContent = articleHeadline;
    writtenBy.textContent = `By: ${articleAuthorName}`;

    ///////////////// Append / Nest Elements /////////////////
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(writtenBy);
    
    // console.log(cardDiv);

    return cardDiv;
};

// cardCreator();
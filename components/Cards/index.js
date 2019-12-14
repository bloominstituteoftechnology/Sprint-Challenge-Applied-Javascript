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
            console.log(response);
            const articles = response.data.articles;
            let eachArticle = articles.forEach((article) => {
                return article;
            })
            let articleContentArray = eachArticle.forEach((array) => {
                return array;
            })
            let articleContentArrayInfo = articleContentArray.forEach((info) => {
                const headlineInfo = info.headline;
                const authorPhotoInfo = info.authorPhoto;
                const authorNameInfo = info.authorName;
                articleContentArrayInfo.forEach(() => {
                    cardsContainer.appendChild(cardCreator(articleContentArrayInfo));
                })
            })
            
        })


    ///////////////// Create Card Component /////////////////
function cardCreator (object){
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
    authorImg.src = "object.articles.arrayItem.authorPhoto";

    ///////////////// Add Content /////////////////
    headline.textContent = "object.articles.arrayItem.headline";
    writtenBy.textContent =  "By: ${object.articles.arrayItem.authorName}";

    ///////////////// Append / Nest Elements /////////////////
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(writtenBy);
    
    // console.log(cardDiv);

    return cardDiv;
};

cardCreator();
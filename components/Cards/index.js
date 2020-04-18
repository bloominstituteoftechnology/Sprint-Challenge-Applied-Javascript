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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( (getData) => {
        console.log(getData);
        const jsArticles = Array.from(getData.data.articles.javascript);
        jsArticles.forEach(el => {
            let newArticle = articleCreate(el);
            entryPt.appendChild(newArticle);
        });
        const bsArticles = Array.from(getData.data.articles.bootstrap);
        bsArticles.forEach(el => {
            let newArticle = articleCreate(el);
            entryPt.appendChild(newArticle);
        }); 
        const techArticles = Array.from(getData.data.articles.technology);
        techArticles.forEach(el => {
            let newArticle = articleCreate(el);
            entryPt.appendChild(newArticle);
        });
        const jqArticles = Array.from(getData.data.articles.jquery);
        jqArticles.forEach(el => {
            let newArticle = articleCreate(el);
            entryPt.appendChild(newArticle);
        });
        const nodeArticles = Array.from(getData.data.articles.node);
        nodeArticles.forEach(el => {
            let newArticle = articleCreate(el);
            entryPt.appendChild(newArticle);
        });
    })
    .catch( (error) => {
        console.log("Error")
    })

const entryPt = document.querySelector(".cards-container");

const articleCreate = function(data){
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("card");
    
    const articleHeader = document.createElement("div");
    articleHeader.textContent = data.headline;
    articleHeader.classList.add("headline");
    articleDiv.appendChild(articleHeader);

    const author = document.createElement("div");
    author.classList.add("author");
    articleDiv.appendChild(author);

    const authorImgDiv = document.createElement("div");
    authorImgDiv.classList.add("img-container");
    author.appendChild(authorImgDiv);

    const authorImg = document.createElement("img");
    authorImg.style.src = data.authorPhoto;
    authorImgDiv.appendChild(authorImg);

    const authorName = document.createElement('span');
    authorName.textContent = `By: ${data.authorName}`;
    author.appendChild(authorName);

    return articleDiv;
};

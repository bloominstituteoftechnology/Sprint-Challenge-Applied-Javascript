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


const cardContainer = document.querySelector('.cards-container');

let javascriptArticles = [];
let bootstrapArticles = [];
let technologyArticles = [];
let jqueryArticles = [];
let nodejsArticles = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {

      response.data.articles.bootstrap.forEach((article) => {
        articleCreator(bootstrapArticles, article, 'bootstrap');
      });
      bootstrapArticles.forEach((article)=>{
          cardContainer.appendChild(article);
      })
      response.data.articles.javascript.forEach((article) => {
        articleCreator(javascriptArticles, article, "javascript");
      });
      javascriptArticles.forEach((article)=>{
          cardContainer.appendChild(article);
      })
      response.data.articles.technology.forEach((article) => {
        articleCreator(technologyArticles, article, 'technology');
      });
      technologyArticles.forEach((article)=>{
          cardContainer.appendChild(article);
      })
      response.data.articles.jquery.forEach((article) => {
        articleCreator(jqueryArticles, article, 'jquery');
      });
      jqueryArticles.forEach((article)=>{
          cardContainer.appendChild(article);
      })
      response.data.articles.node.forEach((article) => {
        articleCreator(nodejsArticles, article, 'node.js');
      });
      nodejsArticles.forEach((article)=>{
          cardContainer.appendChild(article);
      })
      console.log(nodejsArticles);

})
  .catch(error => {console.log('Error! : ' + error)});

function articleCreator(array, obj, topic){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = obj.headline;
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');
    let img = document.createElement('img');
    img.src = obj.authorPhoto;
    let span = document.createElement('span');
    span.textContent = obj.authorName;

    cardDiv.setAttribute('data-topic', topic);

    imageDiv.appendChild(img);
    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(span);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    console.log(cardDiv);
    array.push(cardDiv);
}

//   function tabCreator(data){
//       let tabDiv = document.createElement('div');
//       tabDiv.classList.add('tab');
//       tabDiv.textContent = data;
//       topics.appendChild(tabDiv);
//   }
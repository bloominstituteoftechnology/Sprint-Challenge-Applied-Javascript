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

const entryPointArticle = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    // console.log(response.data.articles);
    
    const arrayArticles = Object.values(response.data.articles)
    arrayArticles.forEach(item => {
    const myArticles = articlesCreator(response.data);
    entryPointArticle.prepend(myArticles);
    });

    console.log(arrayArticles);
    return arrayArticles;

    // old
    // const myArticles = articlesCreator(response.data.articles);
    // entryPointArticle.prepend(myArticles);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



function articlesCreator(data){
  // element  
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");
  

  // class
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  
  // append
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);
  
// //   content
  const arrayArticlesMod = Object.values(data)

  // headline.textContent = arrayArticlesMod.[""0""][""0""].headline
 
  
  // [""0""][1][""0""].authorName
  // [""0""][1][1].authorName
  // authorImg.src = data.articles.authorPhoto;
  // authorName.textContent = arrayArticlesMod.forEach(item => {

  //   });

  // arrayArticles.forEach(item => {
  //   const myArticles = articlesCreator(response.data);
  //   entryPointArticle.prepend(myArticles);
  //   });

//   const dataInArray = Object.entries(data);
//   tab.textContent = dataInArray.topics;



// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

  // card
  // headline
  // author
  // imgContainer
  // authorImg
  // authorName


  return card;
}



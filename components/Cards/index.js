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
cardContainers = document.createElement("div")
function cardsInfo(cardData){
let headlineContainer = document.createElement("div");
let authorContainer = document.createElement("div");
let imgContainer = document.createElement('div');
let img = document.createElement('img');
let spanauth = document.createElement("span");

headlineContainer.textContent = cardData.headline;
img.src = cardData.authorPhoto;
spanauth.textContent = cardData.authorName


cardContainers.classList.add("cards-container");
headlineContainer.classList.add("card");
authorContainer.classList.add("author");
imgContainer.classList.add("img-container");
img.classList.add("img")
spanauth.classList.add("span")

cardContainers.appendChild(headlineContainer);
imgContainer.appendChild(img);
authorContainer.appendChild(imgContainer);
authorContainer.appendChild(spanauth);
cardContainers.appendChild(authorContainer);

return cardContainers;

}

const mainCard = document.querySelector(".cards-container");

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {

    const articles = Object.values(response.data.articles);
 articles.forEach((items)  =>{
     items.forEach((items)=> {
        let news = cardsInfo(items)
        mainCard.append(news)
      
     })
 })
 
 })
.catch(function (error){

    console.log(error)
})


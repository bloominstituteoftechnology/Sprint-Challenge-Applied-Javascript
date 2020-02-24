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
function articleCards(object){
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const headline = document.createElement("div");
  headline.textContent = object;
  const author = document.createElement("div");
  author.classList.add("author")
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  const image = document.createElement("img");
  image.src = object;
  const authName = document.createElement("span");
  authName.textContent = `By: ${object}`

  newCard.appendChild(headline);
  newCard.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(authName);
 return newCard;
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
  console.log(response);
      for (let property in response.data.articles) {
        //  console.log(property);
        console.log(Object.keys(response.data.articles));
  
       Object.keys(response.data.articles).forEach((article) => {
               let newArticle = articleCards(article);
               console.log(newArticle);
               const cardsContainer = document.querySelector('.cards-container');
               console.log(cardsContainer);
               cardsContainer.appendChild(newArticle);
         })
        }
    })

.catch((err) => { 
    console.log(err) 
})
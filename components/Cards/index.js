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
const cardContainer = document.querySelector(".cards-container")

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {
   
   const article = response.data.articles;
   console.log(article)
   // bootStrap card creator
   const bootStrap = article.bootstrap;
   bootStrap.forEach(element => {
       const bootStrapCard = cardCreator(element);
       cardContainer.appendChild(bootStrapCard);
   });
   // end bootStrap

   //  JavaScript
   const js = article.javascript;
   js.forEach(element => {
      const jsCard = cardCreator(element);
      cardContainer.appendChild(jsCard);
    
    });
    //end js
    // jquery
    const jquery = article.jquery;
    jquery.forEach(element => {
     const jqueryCard = cardCreator(element);
     cardContainer.appendChild(jqueryCard);
   });
   // end jquery

   // node
   const node = article.node;
   node.forEach(element => {
    const nodeCard = cardCreator(element);
    cardContainer.appendChild(nodeCard);
   });
   // end node

   // technology
   const tech = article.technology;
   tech.forEach(element => {
    const techCard = cardCreator(element);
    cardContainer.appendChild(techCard);
   });
   // end technology
})
// end of .then ^
.catch((err)=>{
    console.log(err)
})




const cardCreator = (obj) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const headLine = document.createElement("div");
    headLine.classList.add(".headline");
    headLine.textContent = obj.headline;
    console.log(headLine)
    const author = document.createElement("div");
    author.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = obj.authorPhoto;

    const authorsName = document.createElement("span");
    authorsName.textContent = `By ${obj.authorName}`;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    imgContainer.appendChild(authorsName);

    return card;

}

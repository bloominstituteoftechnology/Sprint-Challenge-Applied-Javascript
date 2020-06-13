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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
   .then((response) => {
     console.log(response);
     let cardsCont = document.querySelector(".cards-container");
     let arrayValues = Object.values(response.data.articles);
     arrayValues.forEach(element => {
       element.forEach(article => {
         cardsCont.appendChild(createCard(article));
         console.log("CreatedCard");
       })
     })
   })
   .catch((error) => {

   })

   function createCard(object){

    let div = document.createElement("div");
    div.classList.add("card");
 
    let div1 = document.createElement("div");
    div1.classList.add("headline");
    div1.innerHTML = object.headline;
    div.appendChild(div1);
 
    let div2 = document.createElement("div");
    div2.classList.add("author");
    div.appendChild(div2);
 
    let div3 = document.createElement("div");
    div3.classList.add("img-container");
    div2.appendChild(div3);
 
    let img = document.createElement("img");
    img.src = object.authorPhoto;
    div3.appendChild(img);
 
    let span = document.createElement("span");
    span.innerHTML = "By " + object.authorName;
    div2.appendChild(span);
 
    return div;
 
  }
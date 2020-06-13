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

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res =>{

})
.catch(err =>{
console.log(err);
});

// function articlecards (articleHeadline, url , name){
// const card = document.createElement("div");
// const headline = document.createElement("div");
// const author = document.createElement("div");
// const imgcontainer = document.createElement("div");
// const imgurl = document.createElement("img-src");
// const spanauthor = document.createElement("span");

// card.appendChild(headline);
// card.appendChild(author);
// card.appendChild(imgcontainer);
// card.appendChild(imgurl);
// card.appendChild(spanauthor);

// card.classList.add("card");
// card.classList.add("headline");
// card.classList.add("author");
// card.classList.add("imgcontainer");

// return card;
// }
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


// const cardContainer = document.querySelector('.class-container')

// let dogs = [];

// dogs.forEach(javascript => {
//     axios
//     .get(`https://lambda-times-backend.herokuapp.com/articles.${javascript}`)
//     .then(userData => {
//         cardContainer.appendChild(createCards(userData.data))
//     })
//     .catch(error => console.error(error));
// })

// const createCards = user => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const headline = document.createElement("div");
//   headline.classList.add("headline");

//   const author = document.createElement('div')
//   author.classList.add('author')

//   const imageC = document.createElement("div");
//   imageC.classList.add("img-container");
//   imageC.setAttribute("src", user['jpg']);


//   const spanC = document.createElement("span");
//   span.classList.add("span");
//   spanC.textContent = `By: ${user.authorName}`;

//   headline.textContent = "Javascript"





//   return card;
// };

// createCards();
// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     console.log(response.data.artices);
//   })
//   .catch(error => {
//     console.error(error);
//   });

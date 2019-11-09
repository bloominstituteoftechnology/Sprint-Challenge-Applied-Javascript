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




// Create Card Component
const cardCreator = (article) => {

   // Create Elements
   const card = document.createElement('div');
   const headline = document.createElement('div');
   const author = document.createElement('div');
   const imgContainer = document.createElement('div');
   const img = document.createElement('img');
   const name = document.createElement('span');


   // Element Content
   headline.textContent = article.headline;
   img.scr = article.authorPhoto;
   name.textContent = article.authorName;


   // Nesting Elements
   card.appendChild(headline);
   card.appendChild(author);

   author.appendChild(imgContainer);
   author.appendChild(name);

   imgContainer.appendChild(img);


   //Set Class Names
   card.classList.add('card');
   headline.classList.add('headline');
   author.classList.add('author');
   imgContainer.classList.add('img-container');

   // Return Card
   return card;
};




// Select Cards Container
const cardContainer = document.querySelector('.cards-container');

// Get Article Data
axios
   .get('https://lambda-times-backend.herokuapp.com/articles')
   .then(response => {
      console.log(response.data.articles);
      return response.data.articles;
   })

   // Return an Array of Articles, Sorted Into Arrays By Topic
   .then(topics => {
      const artByTopic = Object.values(topics)
      console.log(artByTopic);
      return artByTopic;
   })

   // Merge Sorted Arrays Into One Array of Articles
   .then(artByTopic => {
      const allArticles = artByTopic.reduce((a, b) => a.concat(b), []);
      console.log(allArticles);
      return allArticles;
   })

   // Create and Append a Card for Every Article in the Merged Array
   .then(allArticles => {
      allArticles.forEach(piece => {
         console.log(piece.authorPhoto);
         newArticle = cardCreator(piece);
         cardContainer.appendChild(newArticle);
      })
   })

   .catch(err => {
      console.log('something went wrong', err);
   });
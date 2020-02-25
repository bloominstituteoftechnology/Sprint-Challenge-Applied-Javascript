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
const container = document.querySelector('.cards-container')

function createCard(data) {

         // Creating the Element
        const cardHeadline = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const bio = document.createElement('span');

        // Adding the classList to the Element
        headline.classList.add('headline');
        author.classList.add('author');
        image.classList.add('img-container');
        cardHeadline.classList.add('card');

        // Adding text to the Element
        headline.textContent = data.headline;
        image.src = data.authorPhoto;
        author.textContent = data.authorName;

        // Appending children to parents
        cardHeadline.appendChild(headline);
        cardHeadline.appendChild(author);
        author.appendChild(imageContainer);
        imageContainer.appendChild(image);
        author.appendChild(bio);

        return cardHeadline;
};


// Get Request
axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)

  .then((response) => {       

    // console.log("success", response.data.articles);
    // console.log("Bootstrap", response.data.articles.bootstrap);
    // console.log("JavaScript", response.data.articles.javascript);
    // console.log("jQuery", response.data.articles.jquery);
    // console.log("Node", response.data.articles.node);
    // console.log("Technology", response.data.articles.technology);

    // a forEach inside of a forEach
    Object.values(response.data.articles).forEach( topic => {
        topic.forEach( (headline) => {
            let container = document.querySelector('.cards-container');
            container.appendChild(createCard(headline));
        })
    });
   
  })
  .catch((err) => {

    console.log("Error: The data has not returned.", err);

  });
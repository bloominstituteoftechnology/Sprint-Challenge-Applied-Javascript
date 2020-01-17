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
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data.articles);
    for(const puller =  )


})

function createCards (){
    const containerDiv = document.createElement('div'),
          headlineDiv = document.createElement('div'),
          authorDiv = document.createElement('div'),
          imgC = document.createElement('div'),
          imgE = document.createElement('img'),
          spanE = document.createElement('span');

          containerDiv.append(headlineDiv);
          containerDiv.append(authorDiv);
          authorDiv.append(imgC);
          imgC.append(imgE);
          authorDiv.append(spanE);

          containerDiv.classList.add('card');
          headlineDiv.classList.add('headline');
          authorDiv.classList.add('author');
          imgC.classList.add('img-container');



          

          return createCards;
        }
        const getCards = document.querySelector('.topics');
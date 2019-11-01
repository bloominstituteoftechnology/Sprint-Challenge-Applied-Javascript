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




const container = document.querySelector(".cards-container");

function createCard(data) {
    //Elemnets 
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authName = document.createElement("span");
    // classlists to elements 
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
// content to elements
  headline.textContent = data.headline;
  img.src = data.authorPhoto;
  authName.textContent = `By ${data.authorName}`;
// appending 
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authName);
  imgContainer.appendChild(img);

  return card;
}


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")

  .then(response => {
    
     console.log("recived", response.data.articles);
     console.log("Bootstrap", response.data.articles.bootstrap);
     console.log("JavaScript", response.data.articles.javascript);
     


    response.data.articles.bootstrap.forEach(item => {
      container.appendChild(createCard(item));
    });

    response.data.articles.javascript.forEach(item => {
      container.appendChild(createCard(item));
    });

    response.data.articles.technology.forEach(item => {
      container.appendChild(createCard(item));
    });

    response.data.articles.jquery.forEach(item => {
        container.appendChild(createCard(item));
      });

    response.data.articles.node.forEach(item => {
      container.appendChild(createCard(item));
    });
    
    })
    
  .catch(error => {
    console.log(error);
  });



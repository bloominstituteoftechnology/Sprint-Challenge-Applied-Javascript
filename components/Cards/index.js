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
        const cardContainer = document.querySelector(".cards-container");

        //code that does nothing
        Object.entries(response.data.articles).forEach(([key, value]) => {
            console.log(`${key} : ${response.data.articles[key]}`);
        })
        //code that does nothing

        //mvp how to convert to a loop on object?
        response.data.articles.bootstrap.forEach(article => {
            cardContainer.appendChild(createCard(article));
        })
        response.data.articles.javascript.forEach(article => {
            cardContainer.appendChild(createCard(article));
        })
        response.data.articles.jquery.forEach(article => {
            cardContainer.appendChild(createCard(article));
        })
        response.data.articles.node.forEach(article => {
            cardContainer.appendChild(createCard(article));
        })
        response.data.articles.technology.forEach(article => {
            cardContainer.appendChild(createCard(article));
        })

    })

        

    function createCard(obj){
        //console.log(obj);
        const card   = document.createElement("div"),
        headline     = document.createElement("div"),
        author       = document.createElement("div"),
        imgContainer = document.createElement("div"),
        img          = document.createElement("img"),
        authorName   = document.createElement("span");
        
        card.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");
        
        headline.textContent = obj.headline;
        img.src = obj.authorPhoto;
        authorName.textContent = `By ${obj.authorName}`;

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(authorName);

        return card;
    }
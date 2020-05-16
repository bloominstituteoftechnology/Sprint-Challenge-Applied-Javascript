// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study (LAMBDA TYPO!) the response data you get back, closely.
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


//STARTING CODE HERE!\\

    //!ELEMENTS BELONG HERE!// 

    function freshCard(data) {
        const myFreshCard = document.createElement("div");
        const freshHeadline = document.createElement("div");
        const freshAuthor = document.createElement("div");
        const freshContainer = document.createElement("div");
        const freshImage = document.createElement("img");
        const freshName = document.createElement("span");
      
        //!CLASSES GO HERE!\\
        myFreshCard.classList.add("card");
        freshHeadline.classList.add("headline");
        freshAuthor.classList.add("author");
        freshContainer.classList.add("img-container");
      
        //!CODE STRUCCTURE HERE!\\
        myFreshCard.appendChild(freshHeadline);
        myFreshCard.appendChild(freshAuthor);
        freshAuthor.appendChild(freshContainer);
        freshContainer.appendChild(freshImage);
        freshAuthor.appendChild(freshName);
      
       //!CODE CONTENT HERE!\\
        freshHeadline.textContent = data.headline;
        freshImage.src = data.authorPhoto;
        freshName.textContent = data.authorName;
        // console.log(myFreshCard);
      
        return myFreshCard;
      }
      
      const cardContainer = document.querySelector(".cards-container");
      
      axios
        .get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response => {
          const article = response.data.articles;
          console.log(article);
      
          article.javascript.forEach(a => {
            cardContainer.appendChild(freshCard(a));
          });
          article.bootstrap.forEach(a => {
            cardContainer.appendChild(freshCard(a));
          });
          article.technology.forEach(a => {
            cardContainer.appendChild(freshCard(a));
          });
          article.jquery.forEach(a => {
            cardContainer.appendChild(freshCard(a));
          });
          article.node.forEach(a => {
            cardContainer.appendChild(freshCard(a));
          });
        })
     .catch (error => {
        console.log ("Sorry! It seems data had been corrupted! It's been banished for your safety");
    });
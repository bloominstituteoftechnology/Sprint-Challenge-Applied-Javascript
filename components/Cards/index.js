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


let url1 = 'https://lambda-times-backend.herokuapp.com/articles';

function getArticleData (url1) {

    // Get article data from url
    axios.get(url1)
    .then( response => {
         
          // Get articles  
          let articleContent = []; 
          articleContent = response["data"]["articles"];      
             
          let articleName = "javascript";
          
          createArticle(articleContent,articleName);

          articleName = "bootstrap";
          
          createArticle(articleContent,articleName);

          articleName = "technology";
          
          createArticle(articleContent,articleName);

          articleName = "jquery";
          
          createArticle(articleContent,articleName);

          articleName = "node.js";
          
          createArticle(articleContent,articleName);


         
    })
     .catch( error => {
         console.log("Error:", error); // If there is an error, log it to the console.
     })


};

function createArticle(articleContent,articleName) {
    
    let y = "headline";  
    let z = "authorName";
    let p = "authorPhoto";

    for(i in articleContent[articleName]) {       
           
        // Get the Main DIV 
        let mainContainerDiv = document.getElementsByClassName("cards-container")[0];

        // Create 4 DIVS and assign Class Names
        let newDiv0 = document.createElement('div');
        newDiv0.classList.add('card'); 
        
        let newDiv1 = document.createElement('div');
        newDiv1.classList.add('headline'); 
        newDiv1.innerText = articleContent[articleName][i][y];

        let newDiv2 = document.createElement('div');
        newDiv2.classList.add('author'); 
        newDiv2.innerText = articleContent[articleName][i][z];

        let newDiv3 = document.createElement('div');
        newDiv3.classList.add('img-container');

        // Create a SPAN
        let newSpan = document.createElement('span');
        // Create an IMG
        let newImg =  document.createElement('img');
        newImg.src = articleContent[articleName][i][p];    

        // Put them together, like lego blocks.
        // Add the image to the image container DIV
        newDiv3.appendChild(newImg);

        // Add image container and the span to author        
        newDiv2.appendChild(newDiv3);
        newDiv2.appendChild(newSpan);

        // add author to headline
        newDiv1.appendChild(newDiv2);

        // add headline to card
        newDiv0.appendChild(newDiv1);

        // add card to cards-container
        mainContainerDiv.appendChild(newDiv0);

       }


}


getArticleData(url1);


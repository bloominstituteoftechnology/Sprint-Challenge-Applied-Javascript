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

    axios.get(url1)
    .then( response => {
          let articleContent = []; 
          articleContent = response["data"]["articles"];       
          let articleName = "javascript";  
          createArticle(articleContent,articleName);
          createArticle(articleContent,articleName);
          createArticle(articleContent,articleName);
          createArticle(articleContent,articleName);
          createArticle(articleContent,articleName);      
          
          articleName = "bootstrap";       
          articleName = "technology";        
          articleName = "jquery";         
          articleName = "node.js"; 
                 
    })
     .catch( error => {
         console.log("Error:", error);
     })
};

function createArticle(articleContent,articleName) {
    let y = "headline";  
    let z = "authorName";
    let p = "authorPhoto";
    for(i in articleContent[articleName]) {             
        let mainContainerDiv = document.getElementsByClassName("cards-container")[0];
        let newDiv0 = document.createElement('div');
        let newDiv1 = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newDiv3 = document.createElement('div');
        let newSpan = document.createElement('span');
        let newImg =  document.createElement('img');

        newDiv0.classList.add('card'); 
        newDiv1.classList.add('headline');   
        newDiv2.classList.add('author'); 
        newDiv3.classList.add('img-container');
        
        newDiv1.textContent = articleContent[articleName][i][y];
        newDiv2.textContent = articleContent[articleName][i][z];
        newImg.src = articleContent[articleName][i][p];    

        newDiv3.appendChild(newImg);       
        newDiv2.appendChild(newDiv3);
        newDiv2.appendChild(newSpan);
        newDiv1.appendChild(newDiv2);
        newDiv0.appendChild(newDiv1);
        mainContainerDiv.appendChild(newDiv0);
       }
}

getArticleData(url1);
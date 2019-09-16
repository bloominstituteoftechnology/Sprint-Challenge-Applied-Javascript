// Create a card for each of the articles and add the card to the DOM.

//Given URL for articles 
let articleUrl = 'https://lambda-times-backend.herokuapp.com/articles';

function getArticleData (articleUrl) {

    // Get article data from url
    axios.get(articleUrl)
    .then( response => {
        console.log("articles:", response.data.articles)

          // Get articles  
          let articleContent = []; 
          articleContent = response.data.articles;      

          let articleName = "javascript";

          createArticle(articleContent, articleName);

          articleName = "bootstrap";

          createArticle(articleContent, articleName);

          articleName = "technology";

          createArticle(articleContent, articleName);

          articleName = "jquery";

          createArticle(articleContent, articleName);

          articleName = "node.js";

          createArticle(articleContent, articleName);



    })
     .catch( error => {
         console.log("Error:", error); // console logs errors
     })


};

function createArticle(articleContent, articleName) {

    let aHead = "headline";  
    let aName = "authorName";
    let aPhoto = "authorPhoto";

    for(i in articleContent[articleName]) {       

        //query select where to append 
        let container = document.querySelector(".cards-container")

        // create class elements
        let newDiv0 = document.createElement('div');
        let newDiv1 = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newDiv3 = document.createElement('div');
        let newSpan = document.createElement('span');
        let newImg =  document.createElement('img');

        //create class lists 
        newDiv0.classList.add('card'); 
        newDiv1.classList.add('headline'); 
        newDiv2.classList.add('author'); 
        newDiv3.classList.add('img-container');


        //text content 
        newDiv1.innerText = articleContent[articleName][i][aHead];
        newDiv2.innerText = articleContent[articleName][i][aName];
        newImg.src = articleContent[articleName][i][aPhoto];    

        //append children
        newDiv3.appendChild(newImg);     
        newDiv2.appendChild(newDiv3);
        newDiv2.appendChild(newSpan);
        newDiv1.appendChild(newDiv2);
        newDiv0.appendChild(newDiv1);
        container.appendChild(newDiv0);

       }
}

getArticleData(articleUrl);
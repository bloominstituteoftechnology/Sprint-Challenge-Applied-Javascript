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

// this block of code helped to make a plain cards appear
//axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response => {
//   const data = response.data.articles
//   Object.keys(data).forEach(topic => {   
//     data[topic].forEach(art => {
//        console.log(art)
//       // append .topics div with card(article)
//        const newArticle = carded(art);
         
//          article.appendChild(newArticle);
//     })
//   });
// })
// .catch(error => {
//     console.log("The data was not returned", error);
//   });
// end of working code of plain cards 



//trying something different using working code 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  const data = response.data.articles
  Object.keys(data).forEach(topic => {   
    data[topic].forEach(art => {
       console.log(art)
      
        const newArticle = carded(art);
         // append newArticles to article
        article.appendChild(newArticle);
    })
  });
})
.catch(error => {
    console.log("The data was not returned", error);
  });

const article = document.querySelector('.cards-container');


function carded(object){

    //define elements
    const myCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const imgCont = document.createElement('div');
    const myImg = document.createElement('img');
    const spanAuthor = document.createElement('span');

    
    

    //class name
    myCard.classList.add('card');
    articleHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    imgCont.classList.add('img-container');
    myImg.classList.add('img');
   // myCard.classList.add('span');
    
    //text content
    newAuthor.textContent = object.authorName;
    myImg.src = object.authorPhoto;
    articleHeadline.textContent = object.headline;
    



    //structure
    myCard.appendChild(articleHeadline);
    newAuthor.appendChild(imgCont);
    imgCont.appendChild(myImg);
    newAuthor.appendChild(spanAuthor);
    myCard.appendChild(newAuthor);

    return myCard;
}

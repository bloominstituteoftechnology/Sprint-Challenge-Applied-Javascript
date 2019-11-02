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
  console.log(response);
    
  response.data.object.for(item =>{
      
    const newArticle = carded(item);
    article.appendChild(newArticle);
    console.log(newArticle);

  });

    
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

    //structure
    articleHeadline.appendChild(myCard);
    newAuthor.appendChild(myCard);
    imgCont.appendChild(newAuthor);
    myImg.appendChild(imgCont);
    spanAuthor.appendChild(myCard);

    //class name
    myCard.classList.add('card');
    myCard.classList.add('headline');
    myCard.classList.add('author');
    myCard.classList.add('img-container');
    myCard.classList.add('img');
    myCard.classList.add('span');
    
    //text content
    
    articleHeadline.textContent = object.headline;
    img.src = object.authorPhoto;
    newAuthor.textContent = object.authorName;

    return myCard;
}
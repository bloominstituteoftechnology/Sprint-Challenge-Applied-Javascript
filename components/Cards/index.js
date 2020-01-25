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

const createCard = (cardData) =>{

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const authorImg = document.createElement("img");
    const authorName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    authorImg.classList.add("img");
    authorName.classList.add("span");

    headline.textContent = cardData.headline;
    authorImg.src = cardData.authorPhoto;
    authorName.textContent = cardData.authorName

    card.appendChild(headline);
    card.appendChild(author);
    
    author.appendChild(imgContainer);
    
    imgContainer.appendChild(authorImg);

    author.appendChild(authorName);

    return card;

}

const information = axios.get("https://lambda-times-backend.herokuapp.com/articles");
//console.log(information);

const cardHook = document.querySelector(".cards-container");

information.then((response)=>{

    //console.log(response.data.articles);
    const articles = Object.values(response.data.articles);

    articles.forEach((item)=>{
        
        let lowerItem = item;

        lowerItem.forEach((lowItem)=>{
            let outCard = createCard(lowItem);
            cardHook.appendChild(outCard);    
        }); //reach into the object of the array
    });//reach into the array
   // console.log(articles);

   /* for(let i = 0; i<articles.length;i++){
        for(let j = 0; j<articles[i].length; j++){
            let outCard = createCard(articles[i][j]);
            cardHook.appendChild(outCard);
        }
    }*/
    
});
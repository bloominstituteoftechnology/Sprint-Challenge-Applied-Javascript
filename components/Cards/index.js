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

let cardsContainer = document.querySelector('.cards-container');

let articleData = 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((axiosDataCards) => {
        let axiosData = Object.entries(axiosDataCards.data.articles);
        console.log(axiosData);
       
        axiosData.forEach(element => {
            cardsContainer.appendChild(createArticle(axiosData));
        })
})
.catch((err) => {
    console.log('error', err)
})




function createArticle(data){
    
    // data.forEach((ele) => {
    //create elements
    let cardDiv = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageDiv = document.createElement('div');
    let image = document.createElement('div');
    let span = document.createElement('span');

    //assign classes
    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageDiv.classList.add('img-container');

    //assign content
    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    span.textContent = "By " + data.authorName;

    //connect elements
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imageDiv);
    imageDiv.appendChild(image);
    author.appendChild(span);

    //return
    return cardDiv;

// });
 
};
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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function(response){
    console.log(response);
    let entryPoint = document.querySelector('.cards-container');
    let axiosResponse = response.data.articles;
    
    for(key in axiosResponse){
        
        axiosResponse[key].forEach(function(item){
         let newCard = createComponent(item);
         entryPoint.appendChild(newCard);
           
        })
    }
})


function createComponent(item) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageContainer = document.createElement('div');
    let authorsImage = document.createElement('img');    
    let authorsName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(authorsImage);
    imageContainer.appendChild(authorsName);

    headline.textContent = item.headline;
    authorsImage.src = item.authorPhoto;
    authorsName.textContent = item.authorName;

    return card
}
// let object = {};
// let key = [];

    // .catch(function(error){
    //     console.log("Error:", error);
    // });
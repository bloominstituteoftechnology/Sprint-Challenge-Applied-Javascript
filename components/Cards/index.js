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
    let axiosResponse = response.data.articles;
})

function createComponent(item) {
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let authorImage = document.createElement('div');
    let ImageContainerImage = document.createELement('img');
    let imageContainerBy = document.createElement('span');

    card.classList.add('headline')
    card.classList.add('author')
    author.classList.add('author')
    author.classList.add('img-container')

    cardHeadline.textContent = item
    cardAuthor.textContent = item
    authorImage.src = item
    ImageContainerImage.Ima


    return newComponent
}

// for(let i = 0; i < axiosResponse.length; i++){

//     let childArray = myArray[i].child;
 
//     for(let j = 0; j < childArray.length; j++){
 
//    console.log(childArray[j]);
 
//     }
 
//  }
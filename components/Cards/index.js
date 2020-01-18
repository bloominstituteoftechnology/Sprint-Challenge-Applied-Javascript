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
function articleCard(info){
    console.log('debug5',info)
    const aCard = document.createElement('div');
    const aHeadline = document.createElement('div');
    const aAuthor = document.createElement('div');
    const aContainer = document.createElement('div');
    const aImage = document.createElement('img');
    const aName = document.createElement('span');

    //add classes
    aCard.classList.add('card');
    aHeadline.classList.add('headline');
    aAuthor.classList.add('author');
    aContainer.classList.add('img-container');

    //append
    aCard.append(aHeadline);
    aCard.append(aAuthor);
    aCard.append(aName);
    aContainer.append(aImage)
    aAuthor.append(aContainer)

    //text content
    aHeadline.append(info.headline)
  
    aName.innerHTML=(info.authorName)
    aImage.src =(info.authorPhoto)

    console.log('debug4', aCard)
    return aCard;
}
// const newCard= articleCard();
// // const articleList=??
const enterPoint = document.querySelector ('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    console.log("debug9", response)
   
    // response.data.articles.forEach(article=>{
    //     console.log("debug 8", article)
    //     article.forEach(info=>{
        
    //         enterPoint.append(articleCard(info));
    //     })
    // })
    console.log("debu6",response);
    response.data.articles.javascript.forEach(info=>{
        
        enterPoint.append(articleCard(info));
    })
    console.log("debu6",response);
    response.data.articles.bootstrap.forEach(info=>{
        
        enterPoint.append(articleCard(info));
    })
    console.log("debug11", enterPoint)
})
.catch(error =>{
console.log("oops", error);
});

console.log("debug12",document)
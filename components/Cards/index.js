// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// Create a component for each 'article' in the list.
// This won't be as easy as just iterating over an array.
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


const cardContainer = document.querySelector('.card-container');
function createArticle(obj){
    let card = document.createElement('div');
    let author = document.createElement('div');
    let headline = document.createElement('div');
    let imgContainer = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    //classes
    card.classList.add('card');
    author.classList.add('author')
    headline.classList.add('headline');
    imgContainer.classList.add('img-container');

    //text content
    for(i=0; i<obj.length; i++){
        headline.textContent = `${obj.data.articles.headline[i]}`;
        image.src = obj.data.articles.authorPhoto[i];
        authorName.textContent = `By ${obj.data.articles.authorName[i]}`;
    }
    
    //append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
    for(i=0; i<response.data.articles.length; i++){
        let findArticle = response.data.articles.javascript;
        let newArticle = createArticle(findArticle);
        cardContainer.appendChild(newArticle);
    }
})


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response=> {
//     console.log(response);
//     response.data.articles.forEach(item=> {
//         for(i=0; i<item.length; i++){

//             let newArticle = createArticle(item[i]);
//             cardContainer.appendChild(newArticle);}
//         });
// })
// .catch(error => {
//     console.log(`AGH!`, error);
//   });

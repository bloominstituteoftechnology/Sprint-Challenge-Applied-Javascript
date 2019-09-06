// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
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


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response=> {
//     console.log(response);
//     response.data.arr.forEach(item=> {
//         let newArticle = createArticle(item);
//         cardContainer.appendChild(newArticle);
//     });
// })
// .catch(error => {
//     console.log(`AGH!`, error);
//   });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=> {
    console.log(response);
        let newArticle = createArticle(response, response.data.articles.javasript);
        cardContainer.appendChild(newArticle);
})


const cardContainer = document.querySelector('.card-container');
function createArticle(obj, arr){
    let card = document.createElement('div');
    let author = document.createElement('div');
    let headline = document.createElement('div');
    let imgContainer = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    card.classList.add('card');
    author.classList.add('author')
    headline.classList.add('headline');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    for(i=0; i<arr.length; i++){
    headline.textContent = `${obj.data.articles.arr[i].headline}`;
    image.src = obj.data.articles.arr[i].authorPhoto;
    authorName.textContent = `By ${obj.data.articles.arr[i].authorName}`;
    };

    return card;
}
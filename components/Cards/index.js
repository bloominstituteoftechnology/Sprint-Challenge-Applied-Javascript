// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

//version 6
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(result =>{
    console.log(result);
    const articleData = result.data;
    console.log(articleData);
    function test(test){
        if (test == []){
            return `true`;
        }
        else {
            return`the info in not correct`;
        }
    };
    return test(articleData);
})   
// .then(test =>{
    
    
// })


//version 5
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     console.log(result);
//     const articleData = result.data;
//     console.log(articleData);
//     function test(test) {
//         if (test === []){
//             return `true`;
//         }
//         else {return`the info in not correct`;}
//     };
//     return test(articleData);
// })   
    
    //version 4 
    //I can just use the array from Array.from(articles and change the function below programmatically)
    // const bootstrap = articleData.articles.bootstrap;
    // Array.from(bootstrap);
    // console.log(bootstrap);
    // console.log(bootstrap[0]);

    //Version 3 below doesn't work
    // Array.from(articleData.articles.bootstrap);

    //Version 2
    //Array.from works....do I have to make arrays from all the article groups??
    // Array.from(articleData);

    //Version 1
    // below works, maybe I have to use Array.from()??
    // console.log(articleData.articles.bootstrap);
    // const bootstrap = articleData.articles.bootstrap;
    // console.log(bootstrap);
    // console.log(bootstrap[0]);

    // doesn't connect with above
    // const cardsContainer = document.querySelector('.cardsContainer');
    // cardsContainer.appendChild(articleCards(bootstrap[0]));

.catch(err =>{
    console.log(`Something went wrong, go back and fix it!`);
})

//Version 1 - the way we were instructed in lecture
function articleCards(item){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    headline.textContent = articles.headline;
    console.log(articles.headline);
    img.src = articles.authorPhoto;
    authorsName.textContent = articles.authorName;

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    headline.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    imgContainer.appendChild(img);

    return card
}
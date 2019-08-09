// import tab from '../Tabs/index'
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
.then((resolve) => {
    // let objects = resolve.data.articles;
    // for(let obj in objects){
    //     objects[obj].forEach(data => {
    //         console.log(objects[obj])
    //         let languages = createJavaScriptCards(data);
    //         cardsContainer.appendChild(languages)
    //     })
    // }
    resolve.data.articles.javascript.forEach(data => {
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    console.log(resolve)
    })
    return axios.get('https://lambda-times-backend.herokuapp.com/articles')
})
.then((resolve) => {
    resolve.data.articles.bootstrap.forEach(data => {
    // let bootstrap = createBootStrapCards(data);
    // cardsContainer.appendChild(bootstrap);
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    })
    return axios.get('https://lambda-times-backend.herokuapp.com/articles')
})
.then((resolve) => {
    resolve.data.articles.jquery.forEach(data => {
    // let jquery = createjQueryCards(data);
    // cardsContainer.appendChild(jquery);
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    })
    return axios.get('https://lambda-times-backend.herokuapp.com/articles')
})
.then((resolve) => {
    resolve.data.articles.node.forEach(data => {
    // let node = createNodeCards(data);
    // cardsContainer.appendChild(node);
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    })
    return axios.get('https://lambda-times-backend.herokuapp.com/articles')
})
.then((resolve) => {
    resolve.data.articles.technology.forEach(data => {
    // let technology = createTechnologyCards(data);
    // cardsContainer.appendChild(technology);
    let javascript = createJavaScriptCards(data)
    cardsContainer.appendChild(javascript)
    })
})


let cardsContainer = document.querySelector('.cards-container')
function createJavaScriptCards(data){
    // Creating Elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorsName = document.createElement('span');
    
    // Giving Elements Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    card.dataset.tab = 'javascript'
    
    // Adding content to the elements
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorsName.textContent = data.authorName;
    
    // Appending elements together
    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img)
    author.appendChild(authorsName)

    return card
}

// function createBootStrapCards(boot){
//     // Creating Elements
//     let card = document.createElement('div');
//     let headline = document.createElement('div');
//     let author = document.createElement('div');
//     let imageContainer = document.createElement('div');
//     let img = document.createElement('img');
//     let authorsName = document.createElement('span');
    
//     // Giving Elements Classes
//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imageContainer.classList.add('img-container');
//     card.dataset.tab = 'bootstrap'

//     // Adding content to the elements
//     headline.textContent = boot.headline;
//     img.src = boot.authorPhoto;
//     authorsName.textContent = boot.authorName;

    
//     // Appending elements together
//     cardsContainer.appendChild(card);
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imageContainer);
//     imageContainer.appendChild(img)
//     author.appendChild(authorsName)
    
//     return card
// }

// function createjQueryCards(jq){
//     // Creating Elements
//     let card = document.createElement('div');
//     let headline = document.createElement('div');
//     let author = document.createElement('div');
//     let imageContainer = document.createElement('div');
//     let img = document.createElement('img');
//     let authorsName = document.createElement('span');
    
//     // Giving Elements Classes
//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imageContainer.classList.add('img-container');
//     card.dataset.tab = 'jquery'

//     // Adding content to the elements
//     headline.textContent = jq.headline;
//     img.src = jq.authorPhoto;
//     authorsName.textContent = jq.authorName;
    
//     // Appending elements together
//     cardsContainer.appendChild(card);
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imageContainer);
//     imageContainer.appendChild(img)
//     author.appendChild(authorsName)
    
//     return card
// }

// function createNodeCards(node){
//     // Creating Elements
//     let card = document.createElement('div');
//     let headline = document.createElement('div');
//     let author = document.createElement('div');
//     let imageContainer = document.createElement('div');
//     let img = document.createElement('img');
//     let authorsName = document.createElement('span');
    
//     // Giving Elements Classes
//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imageContainer.classList.add('img-container');
//     card.dataset.tab = 'node.js'

//     // Adding content to the elements
//     headline.textContent = node.headline;
//     img.src = node.authorPhoto;
//     authorsName.textContent = node.authorName;
    
//     // Appending elements together
//     cardsContainer.appendChild(card);
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imageContainer);
//     imageContainer.appendChild(img)
//     author.appendChild(authorsName)
    
//     return card
// }

// function createTechnologyCards(tech){
//     // Creating Elements
//     let card = document.createElement('div');
//     let headline = document.createElement('div');
//     let author = document.createElement('div');
//     let imageContainer = document.createElement('div');
//     let img = document.createElement('img');
//     let authorsName = document.createElement('span');
    
//     // Giving Elements Classes
//     card.classList.add('card');
//     headline.classList.add('headline');
//     author.classList.add('author');
//     imageContainer.classList.add('img-container');
//     card.dataset.tab = 'technology'

//     // Adding content to the elements
//     headline.textContent = tech.headline;
//     img.src = tech.authorPhoto;
//     authorsName.textContent = tech.authorName;
    
//     // Appending elements together
//     cardsContainer.appendChild(card);
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imageContainer);
//     imageContainer.appendChild(img)
//     author.appendChild(authorsName)
    
//     return card
// }

// function selectTab(){
//     tabs = document.querySelectorAll('.tab');

//     tabs.forEach((tab) => {
//         tab.classList.toggle('active-tab')
//     })
// }

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then((resolve) => {
//     resolve.data.articles.javascript.forEach(data => {
//     let javascript = createJavaScriptCards(data)
//     cardsContainer.appendChild(javascript)
//     })
// })

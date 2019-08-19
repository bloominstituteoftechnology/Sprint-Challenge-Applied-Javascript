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
//console log data
const articleData = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
    console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
  
console.log(articleData);


//create a variable the links to the DOM class of cards-container
const makeCards = document.querySelector('.cards-container');

//create four new div with four new classes and attach them to the DOM with a function
function createCard (data) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = 'Article'; 

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.src = data.authorPhoto

    const image = document.createElement('img');
	image.src = data.authorPhoto;

    
	const authorName = document.createElement('span');
	authorName.textContent = data.authorName;



    //add to the DOM
    makeCards.appendChild(card);
    //attach to the cards
    card.appendChild(headline);
    card.appendChild(author);
    //attach to author div
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(image);
    //execute the variable that attaches the querySelector to the class cards-container
    return makeCards;
};


//call each article from the API using a axios promise and execute function above

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.javascript})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.bootstrap})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });


axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.jquery})
	.then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.node})
	.then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.technology})
    .then((items) => {items.forEach((item) => createCard(item))})
    .catch(err => {
        console.log(err);
    });



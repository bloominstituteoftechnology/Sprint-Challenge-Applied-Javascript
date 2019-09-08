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
//   </div>`
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


    const cardsContainer = document.querySelector('.cards-container');

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        response.data.articles.javascript.forEach ( item => {
        cardsContainer.appendChild(Javascript(response.data.articles.javascript))})})   
    .catch(error => {
        console.log("The data was not returned", error)});

                axios.get("https://lambda-times-backend.herokuapp.com/articles")
                .then(response => {
                    response.data.articles.bootstrap.forEach ( item => {
                    cardsContainer.appendChild(Bootstrap(response.data.articles.bootstrap))})})   
                .catch(error => {
                    console.log("The data was not returned", error)});
                
                axios.get("https://lambda-times-backend.herokuapp.com/articles")
                .then(response => {
                    response.data.articles.technology.forEach ( item => {
                    cardsContainer.appendChild(Technology(response.data.articles.technology))})}) 
                .catch(error => {
                    console.log("The data was not returned", error)});

                axios.get("https://lambda-times-backend.herokuapp.com/articles")
                .then(response => {
                    response.data.articles.jquery.forEach ( item => {
                    cardsContainer.appendChild(Jquery(response.data.articles.jquery))})})   
                .catch(error => {
                    console.log("The data was not returned", error)});

                axios.get("https://lambda-times-backend.herokuapp.com/articles")
                .then(response => {
                    response.data.articles.node.forEach ( item => {
                    cardsContainer.appendChild(Node(response.data.articles.node))})})
                .catch(error => {
                    console.log("The data was not returned", error)});



//Object.keys

function Bootstrap(bootstrap) {
    const
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    authorPhoto = document.createElement('div');
    imgSrc = document.createElement('img')
    authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add ('author')
    authorPhoto.classList.add('img-container');

    headline.textContent = (headline)
    authorName.textContent = (authorName)
    imgSrc.src = "./assets/fido.jpg"

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(authorPhoto);
    author.appendChild(authorName);
    author.appendChild(imgSrc);
        

    return card
}

function Javascript (javascript) {
    const
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    authorPhoto = document.createElement('div');
    imgSrc = document.createElement('img')
    authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add ('author')
    authorPhoto.classList.add('img-container');

    headline.textContent = (headline)
    authorName.textContent = (authorName)
    imgSrc.src = "./assets/fido.jpg"

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(authorPhoto);
    author.appendChild(authorName);
    author.appendChild(imgSrc);

    return card
}


function Jquery (jquery) {
    const
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    authorPhoto = document.createElement('div');
    imgSrc = document.createElement('img')
    authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add ('author')
    authorPhoto.classList.add('img-container');

    headline.textContent = (headline)
    authorName.textContent = (authorName)
    imgSrc.src = "./assets/fido.jpg"

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(authorPhoto);
    author.appendChild(authorName);
    author.appendChild(imgSrc);

    return card
}

function Node (node) {
    const
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    authorPhoto = document.createElement('div');
    imgSrc = document.createElement('img')
    authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add ('author')
    authorPhoto.classList.add('img-container');

    headline.textContent = (headline)
    authorName.textContent = (authorName)
    imgSrc.src = "./assets/fido.jpg"

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(authorPhoto);
    author.appendChild(authorName);
    author.appendChild(imgSrc);

    

    return card
}

function Technology (technology) {
    const
    card = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    authorPhoto = document.createElement('div');
    imgSrc = document.createElement('img')
    authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add ('author')
    authorPhoto.classList.add('img-container');

    headline.textContent = (headline)
    authorName.textContent = (authorName)
    imgSrc.src = "./assets/fido.jpg"

    card.appendChild(author);
    card.appendChild(headline);
    author.appendChild(authorPhoto);
    author.appendChild(authorName);
    author.appendChild(imgSrc);

    return card
}



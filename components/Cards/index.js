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
const card = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles.forEach(item => {
            card.appendChild(cardMaker(response.data))

        })
        // deal with the response data in here
    })
    .catch(err => {
        console.log()
        // deal with the error in here

    })

function cardMaker() {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const picBox = document.createElement('div')
    const pic = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    picBox.classList.add('img-container');

    card.textContent = `Card: ${data.articles}`
    headline.textContent = `Headline: ${data.articles.headline}`
    author.textContent = `Author: ${data.headers}`
    pic.src = `Pic${data.url}`


    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(name);
    card.appendChild(picBox);
    card.appendChild(pic);
    card.appendChild(name);




    return cardMaker

};
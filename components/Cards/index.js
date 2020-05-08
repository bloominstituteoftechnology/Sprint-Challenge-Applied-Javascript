// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function cardMaker(object){
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let frame = document.createElement('div');
    let picture = document.createElement('img');
    let name = document.createElement('span');
    //creates html elements of component
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(frame);
    frame.appendChild(picture);
    author.appendChild(name);
    //structures component
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    frame.classList.add('img-container');
    //adds classes to our component
    headline.textContent = object.headline;
    picture.src = object.authorPhoto;
    name.textContent = object.authorName;
    // sets content

    return card;
    // returns component
}
let cardContainer = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function(response){
        let topics = [response.data.articles.javascript,
            response.data.articles.bootstrap,
            response.data.articles.technology,
            response.data.articles.jquery,
            response.data.articles.node];
        topics.forEach(element => {
            element.forEach(element => {
            let card = cardMaker(element);
            cardContainer.appendChild(card)
            console.log(element);
            })
        })
      
    
    })
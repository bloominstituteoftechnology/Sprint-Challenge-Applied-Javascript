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

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        createCards(response.data.articles);
        // let card1 = createCards(response.data.articles.bootstrap);
        // let cardsContainer = document.querySelector('.cards-container');
        // cardsContainer.appendChild(card1)


    })
    .catch(err => {
        console.log('Error: ', err);
    });

// function createCards(dataObj) {

//     for (let topic in dataObj) {

//         const topicArray = dataObj[topic];
//         //  create card structure
//         const card = document.createElement('div');
//         const headline = document.createElement('div');
//         const author = document.createElement('div');
//         const imgContainer = document.createElement('div');
//         const img = document.createElement('img');
//         let authorN = document.createElement('span');

//         // add classes
//         card.classList.add('card');
//         headline.classList.add('headline');
//         author.classList.add('author');
//         imgContainer.classList.add('img-container')

//         // append
//         card.appendChild(headline);
//         card.appendChild(author);
//         author.appendChild(imgContainer);
//         imgContainer.appendChild(img);
//         author.appendChild(authorN);

//         // add data
//         topic.forEach(el => {
//             headline.textContent = el.headline;
//             img.src = el.authorPhoto;
//             authorN.textContent = el.authorName;
//         })
//     }


//     return card;
// }


function createCards(obj) {
    const cards = document.querySelector('.cards-container');

    for (let topic in obj) {

        const arrayTopics = obj[topic];

        arrayTopics.forEach((el) => {
            //create elements
            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            let authorN = document.createElement('span');

            // add classes
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container')

            // append
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgContainer);
            imgContainer.appendChild(img);
            author.appendChild(authorN);

            // add to dom
            headline.textContent = el.headline;
            img.src = el.authorPhoto;
            authorN.textContent = el.authorName;

            cards.appendChild(card);
        })
    }
}
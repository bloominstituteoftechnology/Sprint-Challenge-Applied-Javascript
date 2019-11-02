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
    .then(response => {
        // console.log(response);
        newArticle(response);
    })

    .catch(error => {
        console.log('The data request was not returned!', error);
    });

// const articles = document.querySelector('.cards-container');

function newArticle(cardData) {

    let cardArr = cardData.data.articles

    for (let key in cardArr) {
        // console.log(key, cardArr[key]);

        let infoArr = cardArr[key]
        // console.log(infoArr)

        for (let value in infoArr) {
            // console.log(infoArr[value]);
            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const authorImg = document.createElement('img');
            const imgContainer = document.createElement('div');
            const writtenBy = document.createElement('span');

            card.appendChild(headline);
            card.appendChild(author);
            imgContainer.appendChild(authorImg)
            author.appendChild(imgContainer);
            author.appendChild(writtenBy);

            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container')


            headline.textContent = infoArr[value].headline;
            writtenBy.textContent = infoArr[value].authorName;
            authorImg.src = infoArr[value].authorPhoto;


            const entryPoint = document.querySelector('.cards-container');
            entryPoint.appendChild(card);
        };
        // return articles;
    }
}
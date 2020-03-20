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

function Cards(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const authorName = document.createElement('span');


    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    // authorName.classList.add('')

    authorImage.src = article.authorPhoto;

    authorName.textContent = article.authorName;

    headline.textContent = article.headline;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(authorName);


    return card;
}



let cards = document.querySelector(".cards-container");


// const keys = object.keys(card);
// const keys = object.keys(headline);
// const keys = object.keys(author);
// const keys = object.keys(authorName);

function newCards(array) {
    // array.forEach(key,  => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            console.log("Got the response: " + JSON.stringify(response));
            let articles = response.data.articles
            console.log("Articles: " + JSON.stringify(articles));

            articles.javascript
            articles["javascript"]
            Object.keys(articles).forEach(articleKey => {
                console.log("Article Key " + articleKey);
                const articlesArray = articles[articleKey];
                articlesArray.forEach(article => {
                    console.log("Element: " + JSON.stringify(article));
                    let newCard = Cards(article);
                    cards.appendChild(newCard);
                });

            });
        });

};

// function getTheArticles(array){
//     axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response =>{
//     console.log(response)
//     let articleArray = response.data.articles;
//     Object.keys(articleArray).forEach(items =>{ articleArray[items].forEach(element =>{
//     let newArray = Articles(element);
//     totalArticles.appendChild(newArray);
//     }) })
//     })}











newCards();
                // let theCard = cardCreator(response.data);

                // newCard.append(theCard);


//             });
//     })
// }
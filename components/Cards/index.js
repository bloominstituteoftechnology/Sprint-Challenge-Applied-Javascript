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
const containMe = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {

        const {
            articles
        } = response.data;
        for (let key in articles) {
            console.log("response", articles[key]);
            articles[key].forEach( element =>{
                containMe.appendChild(createCard(element))

            })


        }



    })
    .catch(error => {
        console.log("The data was not returned", error);
    });



// function getArticles(array) {
//     // createCard()

//     data.forEach(data => {
//         createCard(data)
//     })
//     containMe.appendChild(ralph);

// }

// const indeX = response.data.articles;

function createCard(article) {
    const
        cardContainer = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        image = document.createElement('img'),
        name = document.createElement('span');

    cardContainer.appendChild(headline);
    cardContainer.appendChild(author);
    author.appendChild(name);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);

    cardContainer.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    name.textContent = article.authorName;


    console.log(article)
    return cardContainer;
}


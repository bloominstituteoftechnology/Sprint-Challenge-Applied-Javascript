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

const promiseCard = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);
promiseCard
  .then(response => {
    let objects = response.data.articles;
    const cardsContainer = document.querySelector(".cards-container");
    // console.log(cardsContainer);

    // loop over each obj so i can trun them into arrays
    for (let obj in objects) {
      // map over each item
      objects[obj].map(item => {
        cardsContainer.appendChild(CardComponent(item));
      });
    }
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

function CardComponent(obj) {
  // define the new elemensts;
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const spanName = document.createElement("span");

  // add the class names
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(img);

  // put content
  headlineDiv.textContent = obj.headline;
  img.src = obj.authorPhoto;
  spanName.textContent = obj.authorName;
  // put together
  cardDiv.appendChild(headlineDiv);
  headlineDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(spanName);
  return cardDiv;
}

// const promiseCard = axios
//   .get(`https://lambda-times-backend.herokuapp.com/articles`)
//   .then(response => {
//     const myObj = response.data.articles;
//     CardComponent(myObj);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function CardComponent(objects) {
//   const cards = document.querySelector(".cards-container");

//   for (let obj in objects) {
//     const arr = objects[obj];

//     arr.forEach(article => {

//       //create elements
//       const card = document.createElement("div");
//       const headline = document.createElement("div");
//       const author = document.createElement("div");
//       const imgContainer = document.createElement("div");
//       const img = document.createElement("img");
//       const authorName = document.createElement("span");

//       // style elements
//       card.classList.add("card");
//       headline.classList.add("headline");
//       author.classList.add("author");
//       imgContainer.classList.add("img-container");

//       // add content
//       headline.textContent = article.headline;
//       img.src = article.authorPhoto;
//       authorName.textContent = article.authorName;

//       //put tohether
//       card.appendChild(headline);
//       card.appendChild(author);
//       author.appendChild(imgContainer);
//       author.appendChild(authorName);
//       imgContainer.appendChild(img);
//       cards.appendChild(card);
//     });
//   }
// }


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then((resolve) => {
//     resolve.data.articles.javascript.forEach(data => {
//     let javascript = createJavaScriptCards(data)
//     cardsContainer.appendChild(javascript)
//     })
// })

// let cardsContainer = document.querySelector('.cards-container')
// function createJavaScriptCards(js){
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
//     card.dataset.tab = 'javascript'
    
//     // Adding content to the elements
//     headline.textContent = js.headline;
//     img.src = js.authorPhoto;
//     authorsName.textContent = js.authorName;
    
//     // Appending elements together
//     cardsContainer.appendChild(card);
//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imageContainer);
//     imageContainer.appendChild(img)
//     author.appendChild(authorsName)

//     return card
// }

/*
const articles = axios.get('https://lambda-times-backend.herokuapp.com/articles');

articles
    .then(articleObj => {
        const articles = articleObj.data.articles;

        Object.keys(articles).forEach((articleTopic) => {
            articles[articleTopic].forEach(article => {
                const newArticle = createArticle(article);
                const cardsContainer = document.querySelector('.cards-container');

                cardsContainer.appendChild(newArticle);
            });
        });
    })

    .catch(err => {
        console.log('ERROR: ', err);
      });

const createArticle = articleInfo => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articleInfo.headline;
    articleCard.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    articleCard.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    author.appendChild(imageContainer);

    const image = document.createElement('img');
    image.src = articleInfo.authorPhoto;
    imageContainer.appendChild(image);

    const authorName = document.createElement('span');
    authorName.textContent = `By ${articleInfo.authorName}`;
    author.appendChild(authorName);



    return articleCard;
};
*/
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

let createCard = (cardData) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const authorImage = document.createElement("img");
    const authorName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    authorImage.classList.add("img");
    authorName.classList.add("img");

    headline.textContent = cardData.headline;
    authorImage.src = cardData.authorPhoto;
    authorName.textContent = cardData.authorName;


    card.append(headline, author);

    author.appendChild(imgContainer, authorName);

    imgContainer.appendChild(authorImage);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res =>{
    console.log(res.data.articles)
})

let cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    let articles = Object.values(res.data.articles);
// console.log(articles)
    articles.forEach((item) => {
        let newItem = item;

        newItem.forEach((lowestLevelItem) => {
            let newCard = createCard(lowestLevelItem);
            cardContainer.appendChild(newCard);
        })
    })
})




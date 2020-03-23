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


    card.appendChild(headline);
    card.appendChild(author);

    author.appendChild(imgContainer);

    imgContainer.appendChild(authorImage);

    author.appendChild(authorName);

    return card;

}

let info = axios.get('https://lambda-times-backend.herokuapp.com/articles');

// console.log(info)

let cardNet = document.querySelector('.cards-container');


info.then((response) => {
    let articles = Object.values(response.data.articles);

    articles.forEach((item) => {
        let anItem = item;

        anItem.forEach((lowItem) => {
            let exitCard = createCard(lowItem);
            cardNet.appendChild(exitCard);
        })
    })
})




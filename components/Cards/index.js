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

let article = document.querySelector(".cards-container");

axios

.get("https://lambda-times-backend.herokuapp.com/articles")

.then(res => {
    let articles = Object.values(res.data.articles)

    articles.forEach(card => {
        card.forEach(i => {
            article.appendChild(cardMaker(i))
        })
    })
})

.catch(err => {
    console.log("There was an error: ", err)
})

function CardCreator (data) {

    const card = document.createElement("div");
    card.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = data.headline;

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = data.authorName;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = data.authorPhoto;

    const span = document.createElement("span");
    span.textContent = (`By ${data.authorName}`)

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    return card;

}

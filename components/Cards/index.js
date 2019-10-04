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

const cards_container = document.querySelector(".cards-container");

function Card(attr) {
    // CREATE ELEMENTS
    const card = document.createElement("div");
    const card_headline = document.createElement("div");
    const card_author_container = document.createElement("div");
    const card_img_container = document.createElement("div");
    const card_img = document.createElement("img");
    const card_author = document.createElement("span");

    // ADD CLASSES
    card.classList.add("card");
    card_headline.classList.add("headline");
    card_author_container.classList.add("author");
    card_img_container.classList.add("img-container");

    // ADD TEXT/VALUES
    card_headline.textContent = attr.headline;
    card_img.setAttribute("src", attr.authorPhoto);
    card_author.textContent = attr.authorName;

    // APPEND
    card.appendChild(card_headline);
    card.appendChild(card_author_container);
    card_author_container.appendChild(card_img_container);
    card_img_container.appendChild(card_img);
    card_author_container.appendChild(card_author);

    cards_container.appendChild(card);
}

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log("✅", response.data.articles);

        const articles = response.data.articles;

        for (var key in articles) {
            const info = articles[key];

            info.forEach(element => {
                Card(element);
            });
        }
    })
    .catch(error => {
        console.log("🚨", error);
    });

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

function GitCard(title, imgUrl, author) {

    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const container = document.createElement('div');
    const doggoImg = document.createElement('img');
    const authorName = document.createElement('span');

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    container.classList.add('img-container');
    
    newHeadline.textContent = title;
    doggoImg.src = imgUrl;
    authorName.textContent = `By ${author}`;



    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(container);
    container.appendChild(doggoImg);
    newAuthor.appendChild(authorName);



    return newCard;

}

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {

    console.log(res);

    res.data.articles.bootstrap.forEach((card) => {
        const getCard = GitCard(
            card.headline,
            card.authorPhoto,
            card.authorName,
        );

        cards.appendChild(getCard);

    });

    res.data.articles.javascript.forEach((card) => {

        //console.log(card);

        const getCard = GitCard(
            card.headline,
            card.authorPhoto,
            card.authorName,
        );

        cards.appendChild(getCard);

    });

    res.data.articles.jquery.forEach((card) => {
        const getCard = GitCard(
        card.headline,
        card.authorPhoto,
        card.authorName,
        );

        cards.appendChild(getCard);
    });

    res.data.articles.node.forEach((card) => {

        const getCard = GitCard(
            card.headline,
            card.authorPhoto,
            card.authorName,
        );

        cards.appendChild(getCard);

    });

    res.data.articles.technology.forEach((card) => {

        const getCard = GitCard(
            card.headline,
            card.authorPhoto,
            card.authorName,
        );

        cards.appendChild(getCard);
    });
})

.catch((err) => {
    console.log(err);
});
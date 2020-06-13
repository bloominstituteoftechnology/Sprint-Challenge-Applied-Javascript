// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles x
// Study the response data you get back, closely. x
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though. (Oh no)


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

const cardsBody = document.querySelector('.cards-container');

function cardFunction (cardObject) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
    authorImg.classList.add("img");
    authorName.classList.add("img");

    headlineDiv.textContent = cardObject.headline;
    authorImg.src = cardObject.authorPhoto;
    authorName.textContent = cardObject.authorName;


    cardDiv.append(headlineDiv, authorDiv);

    authorDiv.appendChild(imgDiv, authorName);

    imgDiv.appendChild(authorImg);

    return cardDiv;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    console.log('Card Data:',res)
    let articles = Object.values(res.data.articles);
    articles.forEach((item) => {
        let cardArticle = item;
        cardArticle.forEach((obj) => {
            let newCard = cardFunction(obj);
            cardsBody.appendChild(newCard);
        })
    })
})




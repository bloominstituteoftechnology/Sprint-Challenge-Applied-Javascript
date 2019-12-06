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

const selectCard = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    for (const [key, value] of Object.entries(response.data.articles)) {
        (key, value).forEach(elementItem => {
            selectCard.appendChild(articlesCard(elementItem));
        })
    }
})
.catch(error => {
    console.log('something went wrong', error);
})

function articlesCard(objData) {
    //create elements
    const cardBody = document.createElement('div');
    const headLine = document.createElement('div');
    const authorBody = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //structure
    cardBody.appendChild(headLine);
    cardBody.appendChild(authorBody);

    authorBody.appendChild(imgContainer);
    authorBody.appendChild(authorName);

    imgContainer.appendChild(img);

    //add classes
    cardBody.classList.add('card');
    headLine.classList.add('headline');
    authorBody.classList.add('author');
    imgContainer.classList.add('img-container');

    //text content
    headLine.textContent = objData.headline;
    authorBody.textContent = objData.authorName;
    img.src = objData.authorPhoto;

    return cardBody;
}
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

function createCard(){
    //element creation 
    const cardDiv = document.createElement('div');

        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
            const imgContainerDiv = document.createElement('div');
            const cardImage = document.createElement('img');
        const cardSpan = document.createElement('span');

    //class assignment. 

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');

    //appendment 
    cardDiv.appendChild(headlineDiv);
        headlineDiv.appendChild(authorDiv);
            authorDiv.appendChild(imgContainerDiv);
                imgContainerDiv.appendChild(cardImage);
            authorDiv.appendChild(cardSpan);


    //text content 

    return cardDiv;
}

const newFunc = createCard();

console.log(newFunc);
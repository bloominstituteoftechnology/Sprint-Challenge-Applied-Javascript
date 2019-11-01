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

const cardLocation = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response =>{
        // console.log (response.data)
        for (let key in response.data.articles){
            response.data.articles[key].forEach(item => {
                // console.log (key, item)
                // console.log (item.authorPhoto)
                cardLocation.append(createCard(item));
            });
        }
    })

function createCard(obj){
    const card = document.createElement('div');

    card.classList.add('card');
    card.innerHTML =`
        <div class="headline">${obj.headline}</div>
            <div class="author">
                <div class="img-container">
                    <img src="${obj.authorPhoto}"/>
                </div>
            <span>By ${obj.authorName}</span>
        </div>`;

    return card;
}
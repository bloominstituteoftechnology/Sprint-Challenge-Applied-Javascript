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

function showCards() {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        const artData = response.data.articles;
        const artValues = Object.values(artData);

        console.log(response);

        artValues.forEach(item => {
            item.forEach(items => {
                Cards(items);
            })
        });
    })
}



const show = document.querySelector('.cards-container');
function Cards(object) {
    //Show data on console
    //console.log(object);
    const Card = document.createElement('div');
    Card.classList.add('card');

    const Headline = document.createElement('div');
    Headline.classList.add('headline');
    Headline.textContent = object.headline;

    const Author = document.createElement('div');
    Author.classList.add('author');

    const ImagesDiv = document.createElement('div');
    ImagesDiv.classList.add('img-container')

    const ImagesTag = document.createElement('img');
    ImagesTag.src = object.authorPhoto;

    const Span = document.createElement('span');
    Span.textContent = object.authorName

    Card.appendChild(Headline);
    Card.appendChild(Author);

    Author.appendChild(ImagesDiv);
    Author.appendChild(Span);

    ImagesDiv.appendChild(ImagesTag);

    show.appendChild(Card)

    
}

showCards();



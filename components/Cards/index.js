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

function Cards(objects) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const authorName = document.createElement('span');


    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authorName.classList.add('')

    imgContainer.src = objects.avatar_url;
    authorImage.src = `objects.${authorImage}`;
    authorName.textContent = object.authorName;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(authorName);

    return card;
}



let cards = document.querySelector(".cards-container");

// const keys = object.keys(card);
// const keys = object.keys(headline);
// const keys = object.keys(author);
// const keys = object.keys(authorName);



function newCards(array) {
    // array.forEach(key,  => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            let myCard = response.data.articles
            Objects.keys(myCard).forEach(items => {
                myCard[items].forEach(element => (
                    let newArray = Articles(element);
                newCard.appendChild(newArray);


            })
        })
}

newCards();
                // let theCard = cardCreator(response.data);

                // newCard.append(theCard);


//             });
//     })
// }
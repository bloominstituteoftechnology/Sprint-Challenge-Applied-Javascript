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

function cardCreator(data){
    const 
    card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorImg = document.createElement('img'),
    authorName = document.createElement('span');

    headline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImg);
    author.append(authorName);

    return card;
  }

  axios

    .get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response=>{
        console.log(response);

        //creates an array of arrays out of the object values
        const bigArray = Object.values(response.data.articles);
        console.log(bigArray);
        //loops through the outer array
        bigArray.map(littleArray=>{
            //loops through each inner array
            littleArray.map(article=>{
                document.querySelector('.cards-container').append(cardCreator(article));
            })
        })
    })

    .catch(err => {
        console.log('the article data was not returned' + err);
    })

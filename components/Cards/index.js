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

// Creating variable for cards container:

const topCards = document.querySelector('.cards-container');

// Creating axios request:

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);


    const mainTopics = Object.entries(response.data.articles);
    console.log(mainTopics);

    mainTopics.forEach(subject => {

      subject[1].forEach(data => {
        const newCard = Article(data);
        topCards.append(newCard);
      })
    })
  })
  .catch(error => {
    console.log(`Error! ${error}`);
  })

// Creating Card Function:

function Article(data) {

  // Variables:

  const card = document.createElement('div'),
  cardHeadline = document.createElement('div'),
  cardAuthorBox = document.createElement('div'),
  cardImgCont = document.createElement('div'),
  cardImg = document.createElement('img'),
  cardAuthor = document.createElement('span');

  // Assigning Classes:

  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorBox.classList.add('author');
  cardImgCont.classList.add('img-container');

  // Assigning Content:

  cardHeadline.textContent = data.headline;
  cardImg.src = data.authorPhoto;
  cardAuthor.textContent = data.authorName;

  // Appending Children:

  card.append(cardHeadline);
  card.append(cardAuthorBox);
  cardAuthorBox.append(cardImgCont);
  cardImgCont.append(cardImg);
  cardAuthorBox.append(cardAuthor);

  // Returning Card:

  return card;

}
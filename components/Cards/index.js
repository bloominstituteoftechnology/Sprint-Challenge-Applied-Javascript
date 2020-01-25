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


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    
    Object.values(response.data.articles).forEach(item => {
        item.forEach(items => {
          getCards.appendChild(createCard(items));
        });
        
      
    })
})

  .catch(error => {
	  console.log('the data was not returned', error);
  });



  function createCard(article) {

    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imageC = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageC)
    imageC.appendChild(image)
    author.appendChild(name)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageC.classList.add('img-container')

    headline.textContent = article.headline;
    name.textContent = article.authorName;
    image.src = article.authorPhoto;



    return card;


  }

  const getCards = document.querySelector(".cards-container");
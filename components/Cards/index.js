// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
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

let cardsEntry = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( (response) => {
   let articleKeys = Object.keys(response.data.articles);
		articleKeys.forEach((element) => {
			let crap = response.data.articles[element];
			crap.forEach((x) => {
        console.log(x.authorPhoto);
        // cardsEntry.append(articleCards(x));
			})
		})
})
.catch( err => err)




function articleCards(item){
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const cardImgContDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  cardImgContDiv.classList.add('img-container');

  headlineDiv.textContent = `Headline: ${item.articles.headline}`;
  cardImg.src = `${item.authorPhoto}`;
  authorSpan.textContent = `By ${item.authorName}`;

  cardDiv.append(headlineDiv);
	cardDiv.append(authorDiv);
	cardDiv.append(cardImgContDiv);
	cardImgContDiv.append(cardImg);
  cardImgContDiv.append(authorSpan);
  
  return articleCards

}
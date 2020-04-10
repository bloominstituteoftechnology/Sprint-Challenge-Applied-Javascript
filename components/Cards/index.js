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

const cardEntry = document.querySelector('.cards-container')
function cardMaker(event){
    //create elements
    cardDiv = document.createElement('div')
    headlineDiv = document.createElement('div')
    authorDiv = document.createElement('div')
    authorImgDiv = document.createElement('div')
    authorImg = document.createElement('img')
    authorName = document.createElement('span')

        headlineDiv.textContent = event.headline
          authorImg.src = event.authorPhoto
          authorName.textContent = event.authorName

    //nest elements
    cardDiv.append(headlineDiv, authorDiv, authorImgDiv, authorImg, authorName);
    authorDiv.append(authorImgDiv, authorName);
    authorImgDiv.append(authorImg);
    //class name
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    authorImgDiv.classList.add('img-container');

    //final append
    cardEntry.appendChild(cardDiv)
return cardDiv
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    //storing data
      const cards = res.data.articles
      console.log(cards)
      //iterating 
      cards.javascript.forEach(card => {
          cardMaker(card)
    console.log(cardMaker(card))
      })
      cards.bootstrap.forEach(card =>{
          cardMaker(card)

      })
      cards.technology.forEach(card =>{
          cardMaker(card)

      })
      cards.jquery.forEach(card =>{
          cardMaker(card)

      })
      cards.node.forEach(card =>{
          cardMaker(card)

      })
})
  .catch(err => {
    console.log(err)
  })
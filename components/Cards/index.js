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
function cardMaker(){
    //create elements
    cardDiv = document.createElement('div')
    headlineDiv = document.createElement('div')
    authorDiv = document.createElement('div')
    authorImgDiv = document.createElement('div')
    authorImg = document.createElement('img')
    authorName = document.createElement('span')
    //nest elements
    cardDiv.appendChild(headlineDiv, authorDiv, authorImgDiv, authorImg, authorName);
    authorDiv.appendChild(authorImgDiv, authorImg, authorName);
    //class name
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    authorImgDiv.classList.add('img-container');
    //final append
    cardEntry.appendChild(cardDiv)
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    //storing data
      const cards = res.data.articles
      console.log(cards)
      //iterating 
      cards.javascript.forEach(card => {
          cardMaker(card)
          headlineDiv.textContent = card.headline
          authorImg = card.authorPhoto
        //   authorName.textContent = card.authorName
      })
      cards.bootstrap.forEach(card =>{
          cardMaker(card)
          headlineDiv.textContent = card.headline
          authorImg = card.authorPhoto
        //   authorName.textContent = card.authorName
      })
      cards.technology.forEach(card =>{
          cardMaker(card)
          headlineDiv.textContent = card.headline
          authorImg = card.authorPhoto
        //   authorName.textContent = `${authorName}`
      })
      cards.jquery.forEach(card =>{
          cardMaker(card)
          headlineDiv.textContent = card.headline
          authorImg = card.authorPhoto
        //   authorName.textContent = `${authorName}`
      })
      cards.node.forEach(card =>{
          cardMaker(card)
          headlineDiv.textContent = card.headline
          authorImg = card.authorPhoto
        //   authorName.textContent = `${authorName}`
      })
})
  .catch(err => {
    console.log(err)
  })
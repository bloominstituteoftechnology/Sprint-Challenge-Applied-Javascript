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

const cardPoint = document.querySelector('.cards-container');
 
 axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then( (response) => {

      console.log('received info correctly', response)

      response.data.articles.javascript.forEach( (array) => {
        
        cardPoint.appendChild(cards(array))

      })
      
    })

    .catch( (err) => {

      console.log('error')
      
    })


    function cards(object){

      const cardDiv = document.createElement('div')
      cardDiv.classList.add('card')

      const headlineDiv = document.createElement('div')
      headlineDiv.classList.add('headline')
      headlineDiv.textContent = object.headline

      const authorDiv = document.createElement('div')
      authorDiv.classList.add('author')

      const imgDiv = document.createElement('div')
      imgDiv.classList.add('img-container')

      const image = document.createElement('img')
      image.src = object.authorPhoto

      const authorSpan = document.createElement('span')
      authorSpan.textContent = object.authorName

      cardDiv.appendChild(headlineDiv)
      cardDiv.appendChild(authorDiv)
      authorDiv.appendChild(imgDiv)
      imgDiv.appendChild(image)
      authorDiv.appendChild(authorSpan)

      return cardDiv
    }
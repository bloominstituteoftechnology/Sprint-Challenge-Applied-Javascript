// STEP 3: Create Article cards.
function createCard (data){
    const cardcontainer = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
  
    cardcontainer.append(headlineDiv)
    cardcontainer.append(author)
    author.append(imgCont)
    imgCont.append(img)
    author.append(span)
  
    cardcontainer.classList.add('card')
    headlineDiv.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')
  
    headlineDiv.textContent = `${data.headline}`
    img.src = data.authorPhoto
    span.textContent = `by: ${data.authorName}`
  
    return cardcontainer
    }

    let entry = document.querySelector('.cards-container')
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    
    Object.values(response.data.articles).forEach(item => {
        item.forEach(items => {
            entry.append(createCard(items))
        })
    });
        
})
.catch( err => {
    console.log('the error is', err)
  })
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

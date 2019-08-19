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


function cardCreator(articleHeadline, authorPhoto, authorsName){
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = articleHeadline
    cardDiv.appendChild(headlineDiv)

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
    cardDiv.appendChild(authorDiv)

    const imgcontainerDiv = document.createElement('div')
    imgcontainerDiv.classList.add('img-container')
    authorDiv.appendChild(imgcontainerDiv)

    const imgA = document.createElement('img')
    imgA.src = authorPhoto
    imgcontainerDiv.appendChild(imgA)

    const span = document.createElement('span')
    span.textContent = `By ${authorsName}`
    authorDiv.appendChild(span)

    return cardDiv

}

const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response)=>{
    console.log('Network request was successful')

    const button = document.querySelectorAll('.tab')
    

    button[0].addEventListener('click',()=> {
        const javascript = response.data.articles.javascript
        javascript.forEach((item) => {
        const jscards = cardCreator(item.headline, item.authorPhoto, item.authorName)
        
        cardContainer.appendChild(jscards)
        // cardContainer.classList.toggle('dnhh')
    });

    })

    button[1].addEventListener('click',()=>{
        const bootstrap = response.data.articles.bootstrap
        bootstrap.forEach((item)=>{
        const bscards = cardCreator(item.headline, item.authorPhoto, item.authorName)
        cardContainer.appendChild(bscards)
   })

    })
    

   button[3].addEventListener('click',()=>{
        const jquery = response.data.articles.jquery
        jquery.forEach((item)=>{
        const jqcards = cardCreator(item.headline, item.authorPhoto, item.authorName)
        cardContainer.appendChild(jqcards)
    })

   })

   button[4].addEventListener('click',()=>{
        const node = response.data.articles.node
         node.forEach((item)=>{
        const ncards = cardCreator(item.headline, item.authorPhoto, item.authorName)
        cardContainer.appendChild(ncards)
    })

   })


   button[2].addEventListener('click',()=>{
        const technology =response.data.articles.technology
        technology.forEach((item)=>{
        const techcards = cardCreator(item.headline, item.authorPhoto, item.authorName)
        cardContainer.appendChild(techcards)
    })

   })

})


.catch((error)=>{
    console.log('Network request was unsuccessful')
    console.log(error)
})



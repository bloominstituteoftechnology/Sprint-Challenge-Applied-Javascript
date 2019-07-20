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

//send HTTP GET request 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then (data => {
        console.log('data: ', data)
        const myInfo = data.data;
        console.log('Articles', myInfo)

        const container = document.querySelector('.cards-container')
        const headLine = articlesCreator(myInfo)
        container.appendChild(headLine)


        
    })


//query select class to append to 
const container = document.querySelector('.cards-container')
console.log(container)

function articlesCreator(arg) {
    //create class elements 
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.querySelector('span')

    //create class lists 
    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    //append children 
    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(img)

    //text content
    headLine.textContent = arg.headline
    author.textContent = arg.authorName
    img.src = arg.authorPhoto




    return card


}

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

//Creat the DOM elements from above Example

function cardMaker(headlines, imgUrl, author) {
    const card = document.createElement('div');
    card.classList.add('card')

    
    const headline = document.createElement('div');
    headline.classList.add('headline')
    headline.textContent = headlines
    
    const articleAuthor = document.createElement('div')
    articleAuthor.classList.add(`author`)
    
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')
    
    const img = document.createElement('img')
    img.src = imgUrl
    
    const span = document.createElement('span')
    span.textContent = `By ${author}`
    
    //Append DOM elements to (card) element. 
    card.appendChild(headline)
    card.appendChild(articleAuthor)
    
    //Append Dom Elements to (author) element
    articleAuthor.appendChild(imageContainer)
    articleAuthor.appendChild(span)
    //Append Dom Elements to (imageContainer) element
    imageContainer.appendChild(img) 

    return card

}

const cardContainer = document.querySelector('.cards-container')

//Test Cardmaker 
//cardContainer.appendChild(cardMaker('Testin Testing 123', '../../assets/fido.jpg', 'Ariel'))

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response, reject) => {
        const data = response.data.articles //<-- Data to read through
        //const keys = Object.keys(data)
        const values = Object.values(data)
        for(const value of values){
            console.log(value)
            cardContainer.appendChild(cardMaker(value[0].headline, value[0].authorPhoto, value[0].authorName))
        }
        



        //console.log(keys)
        // console.log(values)
        // console.log(data)
    })
    .catch((error) => {
        console.log(`The request was rejected ${error}`)
    })
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

//

function sectionCards (item1, item2, item3){

    // creating elements 

    const 
    cardBox = document.createElement('div'),
    headlineBox = document.createElement('div'),
    authorBox= document.createElement('div'),
    imgBox= document.createElement('div'),
    imgReal = document.createElement('img'),
    writeBy = document.createElement('span')
    
     
    //append elements

    cardBox.appendChild(headlineBox)
    cardBox.appendChild(authorBox)
    authorBox.appendChild(imgBox)
    imgBox.appendChild(imgReal)
    authorBox.appendChild(writeBy)

    //add class to elements

    headlineBox.classList.add('headline')
    cardBox.classList.add('card')
    authorBox.classList.add('author')
    imgBox.classList.add('img-container')

    //add content 

    headlineBox.textContent = item1
    imgReal.src = item2
    writeBy.textContent = item3
    
//returning the new created div 

    return cardBox

}

// creating a new cont to hold '.card-container

const containerCards = document.querySelector('.cards-container')


//creating axios 

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response)=>{
    console.log('working', response)


        const javascript = response.data.articles.javascript
        javascript.forEach((array) => {
        const newJs = sectionCards(array.headline, array.authorPhoto, array.authorName)

        containerCards.appendChild(newJs)
       
    });

    
        const bootstrap = response.data.articles.bootstrap
        bootstrap.forEach((array)=>{
        const newBstp =sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newBstp)


   })

        const technology =response.data.articles.technology
        technology.forEach((array)=>{
        const newTech = sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newTech)

        })




        const jquery = response.data.articles.jquery
        jquery.forEach((array)=>{
        const newJquery = sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newJquery)

        })

  


            const node = response.data.articles.node
             node.forEach((array)=>{
            const newNode = sectionCards(array.headline, array.authorPhoto, array.authorName)
            containerCards.appendChild(newNode)
        })
    
    
  
    
    })
    
    
    .catch((error)=>{
        console.log('Not working')
        console.log(error)
    })















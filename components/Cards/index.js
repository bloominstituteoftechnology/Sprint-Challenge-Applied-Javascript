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

//creating a new function for the new card holder container with 3 items inside (based on the html example above)

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

// creating a new const to hold '.card-container

const containerCards = document.querySelector('.cards-container')







//creating axios and creating new array for each of the subcategories using.map 

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response)=>{
    console.log(response)



    // 1- creating new const for each subCategory found in topics  (js, node etc..)  and grabbing each database (articles) found in the console.log 


        const javascript = response.data.articles.javascript

     // 2- looping through the new created const and create a new const that will add new array with what they are supposed to have inside  (headline, authorPhoto. authorName)

        javascript.map((array) => {
        const newJs = sectionCards(array.headline, array.authorPhoto, array.authorName)

    // 3- finally append the last const to the container that holds all the cards 
        containerCards.appendChild(newJs)
       
    });

    // reapeat steps 1 to 3 with the different data/artciles 

    
        const bootstrap = response.data.articles.bootstrap
        bootstrap.map((array)=>{
        const newBstp =sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newBstp)


   })

        const technology =response.data.articles.technology
        technology.map((array)=>{
        const newTech = sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newTech)

        })




        const jquery = response.data.articles.jquery
        jquery.map((array)=>{
        const newJquery = sectionCards(array.headline, array.authorPhoto, array.authorName)
        containerCards.appendChild(newJquery)

        })

  


            const node = response.data.articles.node
             node.forEach((array)=>{
            const newNode = sectionCards(array.headline, array.authorPhoto, array.authorName)
            containerCards.appendChild(newNode)
        })
    
    
  
    
    })


    // here , it will check if database was not found and couldn't be reached. 
    
    
    .catch((error)=> {
        console.log('Not working', errror)
       
    })















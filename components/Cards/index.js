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

const cardCont = document.querySelector('.cards-container')

 axios.get('https://lambda-times-backend.herokuapp.com/articles').then(resp => {

    console.log('It works, ty Jesus', resp.data.articles)


 resp.data.articles.javascript.forEach(element => {
    
    cardCont.appendChild(someCard(element))

})

resp.data.articles.bootstrap.forEach(element => {
    
    cardCont.appendChild(someCard(element))

})

resp.data.articles.technology.forEach(element => {
    
    cardCont.appendChild(someCard(element))

})

resp.data.articles.jquery.forEach(element => {
    
    cardCont.appendChild(someCard(element))

})

resp.data.articles.node.forEach(element => {
    
    cardCont.appendChild(someCard(element))

})

})

.catch(err => {
    
    console.log("Oh no, please don't do this!", err)

}
    )

    function someCard(obj){


        //Create Element

        let card = document.createElement('div')
        let headL = document.createElement('div')
        let author = document.createElement('div')
        let imgCont = document.createElement('div')
        let img = document.createElement('img')
        let authName = document.createElement('span')

        //Append Children

        card.appendChild(headL)
        card.appendChild(author)
        author.appendChild(imgCont)
        imgCont.appendChild(img)
        headL.appendChild(authName)

        //Add Classes

        card.classList.add('card')
        headL.classList.add('headline')
        author.classList.add('author')
        imgCont.classList.add('img-container')
        
        
        //Add Content

        headL.textContent = obj.headline
        img.src = obj.authorPhoto
        authName.textContent = obj.authorName



        return card

    }
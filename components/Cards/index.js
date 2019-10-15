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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((articles) => {
       let lambArt= articles.data.articles;
        console.log(lambArt)      
        lambArt.bootstrap.forEach(element => {
            document.querySelector('.cards-container').appendChild(cardCreator(element))})

        lambArt.javascript.forEach(element => {
            document.querySelector('.cards-container').appendChild(cardCreator(element))})

        lambArt.jquery.forEach(element => {
            document.querySelector('.cards-container').appendChild(cardCreator(element))})

        lambArt.node.forEach(element => {
            document.querySelector('.cards-container').appendChild(cardCreator(element))})

        lambArt.technology.forEach(element => {
            document.querySelector('.cards-container').appendChild(cardCreator(element))})
            
        })
        
        

    .catch((err) => { 
        console.error(err)
    
    })

    // Creates the card
    function cardCreator (art) {
        // console.log(head)
        const card = document.createElement('div')
        card.classList.add('card')

        const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = art.headline
        card.appendChild(headline)

        const author = document.createElement('div')
        author.classList.add('author')
        card.appendChild(author)

        const imgCon = document.createElement('div')
        imgCon.classList.add('img-container')
        author.appendChild(imgCon)

        const image = document.createElement('img')
        image.src = art.authorPhoto
        imgCon.appendChild(image)

        const authorName = document.createElement('span')
        authorName.textContent = `By ${art.authorName}`
        author.appendChild(authorName)

        return card
    }
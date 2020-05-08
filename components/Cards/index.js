// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely. 
//^ studied response:  V V V V V V V
//link outputs "articles" which has 5 arrays that contain different number of objects within
// ^ ^ ^ ^ ^ ^ ^ ^
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

                    //start of axios promise\\
axios.get('https://lambda-times-backend.herokuapp.com/articles').then( response => { 
    

    //start of consts grabbing information from the API to convert into array\\
const javascript = response.data.articles.javascript
const bootstrap = response.data.articles.bootstrap
const technology = response.data.articles.technology
const jquery = response.data.articles.jquery
const node = response.data.articles.node

//Function start of inserting articles via array method forEach\\
function insertArticle(topic){
    topic.forEach(element => {
        //start of createElement\\
        const card = document.createElement('div')
        const Headline = document.createElement('div')
        const Author = document.createElement('div')
        const ImgContainer = document.createElement('div')
        const Img = document.createElement('img')
        const Signature = document.createElement('span')
    
        //start of appendChild\\
        card.appendChild(Headline)
        card.appendChild(Author)
        Author.appendChild(ImgContainer)
        ImgContainer.appendChild(Img)
        Author.appendChild(Signature)
    
        //start of classList.add\\
        card.classList.add('card')
        Headline.classList.add('headline')
       Author.classList.add('author')
        ImgContainer.classList.add('img-container')
    
        //start of textContent\\
        Headline.textContent = element.headline
        Img.src = element.authorPhoto
        Signature.textContent = element.authorName

        //start of QS for appending child\\
        document.querySelector('.cards-container').appendChild(card)
    })
        
}

//start of topics array created to use forEach method for cb\\
const topicsArray = [javascript, bootstrap, technology, jquery, node]

//start of topics foreach method function\\
topicsArray.forEach( item => {
    insertArticle(item)
})

})
.catch( error => {
    console.log('Failed')
})
.finally( () => {
    console.log('Donezo')
})

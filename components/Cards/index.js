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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
      console.log('Response: ', response.data.articles);
      const javascript = response.data.articles.javascript
      const bootstrap = response.data.articles.bootstrap
      const jquery = response.data.articles.jquery
      const node = response.data.articles.node
      const cards = document.querySelector(".cards-container")

    for(let i = 0; i < javascript.length; i++) {

        let card = document.createElement("div")
        let headline = document.createElement("div")
        let author = document.createElement("div")
        let imageContainer = document.createElement("div")
        let image = document.createElement("img")
        let authorSpan = document.createElement("span")

        headline.textContent = javascript[i].headline
        image.src = javascript[i].authorPhoto
        authorSpan.textContent = javascript[i].authorName

        card.classList.add("card")
        headline.classList.add("headline")
        author.classList.add("author")
        imageContainer.classList.add("img-container")

        cards.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imageContainer)
        imageContainer.appendChild(image)
        author.appendChild(authorSpan)    
      }

      for(let i = 0; i < node.length; i++) {

        let card = document.createElement("div")
        let headline = document.createElement("div")
        let author = document.createElement("div")
        let imageContainer = document.createElement("div")
        let image = document.createElement("img")
        let authorSpan = document.createElement("span")

        headline.textContent = node[i].headline
        image.src = node[i].authorPhoto
        authorSpan.textContent = node[i].authorName

        card.classList.add("card")
        headline.classList.add("headline")
        author.classList.add("author")
        imageContainer.classList.add("img-container")

        cards.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imageContainer)
        imageContainer.appendChild(image)
        author.appendChild(authorSpan)    
      }

      for(let i = 0; i < bootstrap.length; i++) {

        let card = document.createElement("div")
        let headline = document.createElement("div")
        let author = document.createElement("div")
        let imageContainer = document.createElement("div")
        let image = document.createElement("img")
        let authorSpan = document.createElement("span")

        headline.textContent = bootstrap[i].headline
        image.src = bootstrap[i].authorPhoto
        authorSpan.textContent = bootstrap[i].authorName

        card.classList.add("card")
        headline.classList.add("headline")
        author.classList.add("author")
        imageContainer.classList.add("img-container")

        cards.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imageContainer)
        imageContainer.appendChild(image)
        author.appendChild(authorSpan)    
      }

      for(let i = 0; i < jquery.length; i++) {

        let card = document.createElement("div")
        let headline = document.createElement("div")
        let author = document.createElement("div")
        let imageContainer = document.createElement("div")
        let image = document.createElement("img")
        let authorSpan = document.createElement("span")

        headline.textContent = jquery[i].headline
        image.src = jquery[i].authorPhoto
        authorSpan.textContent = jquery[i].authorName

        card.classList.add("card")
        headline.classList.add("headline")
        author.classList.add("author")
        imageContainer.classList.add("img-container")

        cards.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imageContainer)
        imageContainer.appendChild(image)
        author.appendChild(authorSpan)    
      }
    })
    .catch(function (handleError) {
      console.log('Error: ', handleError);
    },[])

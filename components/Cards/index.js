// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const cards = document.querySelector('.cards-container');

// INFO HERE IS WITHIN THE OBJECTS (LAST STEP)
function newCard(info){
    // CREATE ELEMENTS
    const 
        card = document.createElement('div'),
        cardHeadline = document.createElement('div'),
        AuthorInfo = document.createElement('div'),
        ImgContainer = document.createElement('div'),
        Img = document.createElement('img'),
        Author = document.createElement('span');

    // ADD CLASSES
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    AuthorInfo.classList.add('author');
    ImgContainer.classList.add('img-container');

    // ADD CONTENT
    cardHeadline.textContent = `${info.headline}`;
    Img.src = `${info.authorPhoto}`;
    Author.textContent = `By ${info.authorName}`;

    // APPEND
    card.appendChild(cardHeadline);
    card.appendChild(AuthorInfo);
    AuthorInfo.appendChild(ImgContainer);
    ImgContainer.appendChild(Img);
    AuthorInfo.appendChild(Author);

    // console.log(info)

    // RETURN
    return card;
}

// USE .FOREACH FOR THE ARRAY (RESPONSE>DATA>ARTICLES>ITEMS[ARRAY]>INFO{OBJECTS})
// USE THIS. TO PULL THE ARRAY'S OBJECTS
// IF .FOREACH AXIOS -> CREATE NAME FOR ARRAY
// IF .FOREACH WITHIN AXIOS CONTAINING .THEN -> GET TO ITEMS

axios
    // GET REQUEST
    .get(`https://lambda-times-backend.herokuapp.com/articles`)

    // PROMISE
    .then(response => {
        // console.log(response);
        // console.log(response.data.articles);
        // console.log('Object keys', Object.keys(response.data.articles))
        const obj = Object.keys(response.data.articles);
        for(let i = 0; i < obj.length; i++){
            // console.log(obj[i]);
            response.data.articles[obj[i]].forEach(item => {
                cards.appendChild(newCard(item))
            })
        }
        // console.log(Object.keys(response.data.articles))
        // console.log(Object.values(response.data.articles))
        // response.data.articles.forEach(property => {
        //     console.log(response.data.articles[property])
        //     cards.appendChild(newCard(response.data.articles.property));
        // })

    })
    // CATCH ERRORS
    .catch(error => {
        console.log('The data was not received. Try again.', error)
    })

    // const obj = response.data.articles;
    // console.log(obj);
    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))
    // Object.values(obj).forEach(property => {
    //     console.log(obj[property])
    // })
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

const injectCardsToHTML = document.querySelector('.cards-container');

// injectCardsToHTML.append('Hello there this is where the cards will go.');

// Write code to inject the data into the HTML class.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const javascript = response.data.articles.javascript;
    javascript.forEach(item => {
        console.log(item);
        injectCardsToHTML.append(componentCreator(item));
    })

    const bootstrap = response.data.articles.bootstrap;
    bootstrap.forEach(item => {
        injectCardsToHTML.append(componentCreator(item));
    })

    // technology
    const technology = response.data.articles.technology;
    technology.forEach(item => {
        injectCardsToHTML.append(componentCreator(item));
    })
    // jquery

    const jquery = response.data.articles.jquery;
    jquery.forEach(item => {
        injectCardsToHTML.append(componentCreator(item));
    })

    // node
    const node = response.data.articles.node;
    node.forEach(item => {
        injectCardsToHTML.append(componentCreator(item));
    })
})
.catch(error => {
    console.log(error);
})

// dataForComponent.forEach(item => {
//     console.log(item);
//     injectCardsToHTML.append(componentCreator(item));
//     })


function componentCreator(input){
    console.log(input);
    // Create HTML Elements
    const cardFrame = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageFrame = document.createElement('div');
    const authorImage = document.createElement('img');
    const authorName = document.createElement('span');

    // Setup Structure
    cardFrame.append(articleHeadline);
    cardFrame.append(authorDiv);
    authorDiv.append(imageFrame);
    imageFrame.append(authorImage);
    authorDiv.append(authorName);

    // Add Classes
    cardFrame.classList.add('card');
    articleHeadline.classList.add('headline');
    authorDiv.classList.add('author');
    imageFrame.classList.add('img');

    // Add Content
    // input.forEach(item => {
    //     console.log(item);
    // })

    articleHeadline.textContent =  input.headline;
    authorName.textContent = input.authorName;
    authorImage.src = input.authorPhoto;

    return cardFrame;
}
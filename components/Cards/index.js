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

function cardMaker(obj) {

    const cardContainer = document.createElement('div');
    const headerHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const headerImg = document.createElement('img');
    const nameAuthor = document.createElement('span');
    
    cardContainer.appendChild(headerHeadline);
    cardContainer.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(headerImg);
    author.appendChild(nameAuthor);

    cardContainer.classList.add('card');
    headerHeadline.classList.add('headline');
    nameAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    headerHeadline.textContent = headLine;
    headerImg.textContent = authorPhoto;
    nameAuthor.textContent = `By ${authorName}`;

    return cardContainer;

}

axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((res) => {
        console.log(`Here is the res: `, res);
        res.data.data.articles
    })
    .catch((err) => {
        console.log('There is an error: ', err);
    });
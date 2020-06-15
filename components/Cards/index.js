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

axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((res) => {
        const cardscontainer = document.querySelector('.cards-container');
        console.log(`Here is the res: `, res);
        res.data.articles.bootstrap.forEach((arr1) => {
            const bootstrapCard = cardMaker(arr1);
            console.log(bootstrapCard);
            cardscontainer.append(bootstrapCard);

        });
        res.data.articles.javascript.forEach((arr2) => {
            const javascript = cardMaker(arr2) 
            cardscontainer.append(javascript);

        });
        res.data.articles.jquery.forEach((arr3) => {
            const jquery = cardMaker(arr3) 
            cardscontainer.append(jquery);
 
        });
        res.data.articles.node.forEach((arr4) => {
            const node = cardMaker(arr4) 
            cardscontainer.append(node);

        }); 
        
        res.data.articles.technology.forEach((arr5) => {
            const technology = cardMaker(arr5) 
            cardscontainer.append(technology);

        });
    })
    .catch((err) => {
        console.log('There is an error: ', err);
    });


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
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headerHeadline.textContent = obj.headline;
    headerImg.src = obj.authorPhoto;
    nameAuthor.textContent = `By ${obj.authorName}`;

    return cardContainer;

};


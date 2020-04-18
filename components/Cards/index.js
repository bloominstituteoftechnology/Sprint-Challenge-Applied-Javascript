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
    .then( response => {
        
        let artObj = response.data.articles;
        console.log('this is the artObj', artObj);
        let keyOfArt = Object.keys(response.data.articles);
        console.log("this is the keys for the articles", keyOfArt);
    
        let arrayData = Object.entries(artObj);
        console.log('this is the arrayData', arrayData);    

        console.log('outside array',arrayData[0]);

        arrayData.forEach((outArray,i) => {
            outArray[1].forEach((inObj) => {
                console.log('this is in inObj,', inObj);
                let cardContainer = document.getElementsByClassName('cards-container');
                let cardCreate = cardMaker(inObj);
                cardContainer[0].appendChild(cardCreate);

            });
        });

        // console.log('inside array',arrayData[0][1]); 

        // arrayData[0][1].forEach((item) => {
        //     console.log('item ', item.headline);
        // } )
        
    })
    .catch( err => {
        console.log('There is an error');
    });


function cardMaker(dataObj){

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let headlineOfArt = document.createElement('div');
    headlineOfArt.classList.add('headline');
    headlineOfArt.textContent = `${dataObj.headline}`;
    newCard.appendChild(headlineOfArt);
   

    let authorOfArt = document.createElement('div');
    authorOfArt.classList.add('author');
    newCard.appendChild(authorOfArt);

    let imgCon = document.createElement('div');
    imgCon.classList.add('img-container');
    authorOfArt.appendChild(imgCon);

    let imgOfAuthor = document.createElement('img');
    imgCon.appendChild(imgOfAuthor);

    let nameOfAuthor = document.createElement('span');
    nameOfAuthor.textContent = `By: ${dataObj.authorName}`;
    imgCon.appendChild(nameOfAuthor);

    return newCard;
};    

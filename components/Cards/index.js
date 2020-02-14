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

//funtion to create card
function createCard(){
//create elements
  const newCard = document.createElement('div');
  const newHeadline = document.createElement('div');
  const newAuthor = document.createElement('div');
  const newImageCtn = document.createElement('div');
  const newAuthorImg = document.createElement('img');
  const newAuthorName = document.createElement('span');

//assign classes
    newCard.classList.add('card');
    newHeadline.classList.add('headline')  ;
    newAuthor.classList.add('author');
    newImageCtn.classList.add('img-container');



//append the elements
    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newAuthorName);
    newAuthor.appendChild(newImageCtn);
    newImageCtn.appendChild(newAuthorImg);

    //set the content
    newHeadline.textContent = headline;
    newAuthorImg.src = authorPhoto;
    newAuthorName.textContent = `By ${authorName}`;

return newCard;

}//end createCard()



//get entry point & don't name it entryPoint
const cardEntry = document.querySelector('.cards-container');

//api call
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)//data.articles
        console.log("This first   " +  response.data.articles.javascript) //first object of javascript
       console.log(response.data.articles.javascript[0].authorName) //this actually is returning properly

        //  for (let key in response.data.articles){
        //      console.log("Key: "  + key);//works - puts out javascript, bootstrap , etc

        for (let i = 0; i < response.data.articles[key].length; i++) {
            
            //const freshCard = Card();
            const freshCard = Card(response.data.articles[key][i]);
            console.log(response.data.articles[key][i]);
            // entry.appendChild(newCard);
            entry.appendChild(freshCard);
          }
        

        //     //  for (let i = 0; i < response.data.articles[key].length; i++){
        //     //      const freshCard = createCard();
        //     //      console.log("fresh: " + response.articles[key][i]);

        //     //      cardEntry.appendChild(createCard(freshCard));
        //     //  }


        //  }// for key in response


      })//end response
        .catch(error => {
            console.log("Error in cards index.js.")
        });


      //obj=response.data.articles;
      //console.log(obj);
    //   const keys = Object.keys(response.data.articles);
    //  keys.map ( article => {
    //    cardEntry.appendChild(createCard(article));
    //  })


//axios.get("https://lambda-times-backend.herokuapp.com/articles")
 // .then(response => {
//console.log(response.data.articles);//js OBJECT
//const obj = (response.data.articles);
//console.log(typeof mdata);//OBJECT

// for (const prop in obj) {
//     console.log(`obj.${prop}: ${obj[prop][0]["headline"]}`);
//     console.log(`obj.${prop}: ${obj[prop][0]["authorPhoto"]}`);
//     console.log(`obj.${prop}: ${obj[prop][0]["authorName"]}`);
//   }
// response.data.articles.forEach( item => {
//     //console.log(`${item[prop][0]["headline"]}`);
//          //console.log(`obj.${prop}: ${obj[prop][0]["authorPhoto"]}`);
//        //console.log(`obj.${prop}: ${obj[prop][0]["authorName"]}`);
// })

//cardEntry.appendChild(newCard);
    // for (let key in response.data.articles) {
    //   console.log(key);

    //   for (let i = 0; i < response.data.articles[key].length; i++) {
       
    //     //const newCard = createCard(response.data.articles[key][i]);
    //    // console.log(response.data.articles[key][i]);
        
    //     //cardEntry.appendChild(newCard);
    //   }
    // }

    // response.data.articles.forEach(article => {
    //     const newCard = createCard(article);
    //     cardEntry.appendChild(newCard);
    // })
  //})//end response
       



//create new card


// append to entry point - which will not be named entryPoint

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




const cards = document.querySelector('.card');

const cardArticle = [
];

//Axios, send a GET request to the following URL 

    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then( (response)=> {
        // deal with the response data in here

            cardArticle.forEach(item => {
    
            console.log(response.data);
        })
        console.log(response.data);
        newCard(response.data)
    })

    .catch( (err) => {
      console.log(err)
        // deal with the error in here
    })
// })


    function newCard(data) {

// define new elements
    const card1 = document.createElement('div');
    const  headline1 = document.createElement('div');
    const author1 = document.createElement('div');
    const imgholder = document.createElement('div');
        const image1 = document.createElement('img');
    const authorname = document.createElement('span');

// Structure of Elements


let entrypoint3 = document.querySelector('.cards-container')
     entrypoint3.appendChild(card1);


     
card1.appendChild(headline1);
headline1.textContent = data.headline;

card1.appendChild(author1);
author1.textContent = data.author1;

author1.appendChild(imgholder);

    imgholder.appendChild(image1);
    image1.src = data.assets_url;

card1.appendChild(authorname);
authorname.textContent = data.authorName

//set Class Names

    card1.classList.add('card')

    headline1.classList.add('headline')
     headline1.textContent = data.headline
     
     author1.classList.add('author')
     author1.textContent = data.authorName


    
     
     
    return card1
    }

    // array

    // const cardArray = [
    // 'javascript',
    // 'bootstrap',
    // 'technology',
    // 'jquery',
    // 'node.js',
    // ];


    // cardArray.forEach(items => {
    //     axios.get(`https://lambda-times-backend.herokuapp.com/articles{items}`)
    //     .then( (response)=> {
    //     const newCard2 = newCard(response.data)
    //    card.appendChild(newCard2);
    //   }
    //      )
  
    //   });
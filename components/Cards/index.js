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

//Completely new code - rewriting everything from scratch

const cardsContainer = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(result =>{
    console.log(result);
    const javascriptArray = result.data.articles.javascript;
    console.log(javascriptArray);
    const bootstrapArray = result.data.articles.bootstrap;
    console.log(bootstrapArray);
    const techArray = result.data.articles.technology;
    console.log(techArray);
    const jqueryArray = result.data.articles.jquery;
    console.log(jqueryArray);
    const nodeArray = result.data.articles.node;
    console.log(nodeArray);


    //The for loop and the .forEach() both populate the page with empty cards....why wont they populate!?!?!?!?!?!? 
    //Realized that I hadn't appended anything in the component. Rookie mistake!! Still not sure how I got them populated. Look over the weekend. Ask for help. 
    
    for(i = 0; i < javascriptArray.length; i++){
        cardsContainer.appendChild(articleCards(javascriptArray[i]));
    }
    // javascriptArray.forEach(item =>{
    //     const pleasePopulate = articleCards(item);
    //     cardsContainer.appendChild(pleasePopulate);
    // })


    for(i = 0; i < bootstrapArray.length; i++){
        cardsContainer.appendChild(articleCards(bootstrapArray[i]));
    }
    for(i = 0; i < techArray.length; i++){
        cardsContainer.appendChild(articleCards(techArray[i]));
    }
    for(i = 0; i < jqueryArray.length; i++){
        cardsContainer.appendChild(articleCards(jqueryArray[i]));
    }
    for(i = 0; i < nodeArray.length; i++){
        cardsContainer.appendChild(articleCards(nodeArray[i]));
    }
})

function articleCards(item){
    const cardCard = document.createElement('div');
    cardCard.classList.add('card');

    const cardHeadline = document.createElement('div');
    cardHeadline.textContent = item.headline;
    cardHeadline.classList.add('headline');
    cardCard.appendChild(cardHeadline);

    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');
    cardCard.appendChild(cardAuthor);

    const cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('img-container');
    cardAuthor.appendChild(cardImgContainer);

    const cardImg = document.createElement('img');
    cardImg.src = item.authorPhoto;
    cardImgContainer.appendChild(cardImg);

    const cardSpan = document.createElement('span');
    cardSpan.textContent = item.authorName;
    cardAuthor.appendChild(cardSpan);



    return cardCard
}






// const cardsContainer = document.querySelector('.cardsContainer');

// // version 10 - retake 
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     const articlesForCards = result.data.articles;
//     Object.keys(articlesForCards).forEach(topic =>{
//         articlesForCards[topic].forEach(articleCards());
        
//     })
    
//     cardsContainer.appendChild(articleCards(topic));
// })   
  
// .catch(err =>{
//     console.log(`Something went wrong, go back and fix it!`);
// })

// //Version 1 - the way we were instructed in lecture
// function articleCards(object){
//     const card = document.createElement('div');
//     card.classList.add('card');

//     const headline = document.createElement('div');
//     headline.textContent = array.headline;
//     headline.classList.add('headline');

//     const author = document.createElement('div');
//     author.classList.add('author');
    
//     const imgContainer = document.createElement('div');
//     imgContainer.classList.add('img-container');
    
//     const img = document.createElement('img');
//     img.src = object.authorPhoto;

//     const authorsName = document.createElement('span');
//     authorsName.textContent = object.authorName; 

//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imgContainer);
//     imgContainer.appendChild(img);
//     author.appendChild(authorsName);

//     return card

// }

//VERSIONS BELOW - SPRINT AND RETAKE

//version 9 - retake 
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     console.log(result);
//     //What do I know? --> line 24 console.logs an object, now I have to  go through an object to get to the information in the arrays (key:value pairs.).

//     //What do I want? I want the information in data.articles.bootstrap(javascript, jquery, node, technology). Bootstrap(etc.) is an array of objects. Iterate over the array. Use type checking. 
//     console.log(typeof result.data.articles);
//     //It's an object. 
//     console.log(result.data.articles);
//     //Object of arrays...the information I want is made up of the values. object values.
//     const damnArticles = result.data.articles;
//     console.log(damnArticles);
//     console.log(typeof damnArticles);
//     const letMeGetIt = Array.from(damnArticles)
//     console.log(letMeGetIt);
    
//     letMeGetIt.forEach(i =>{
//         console.log(`hello`);
//         const newArticleCards = articleCards(i);
//         cardsContainer.appendChild(newArticleCards);
//     })

    // for (var i in damnArticles){
    //     cardsContainer.appendChild(articleCards(damnArticles[i]));
    // }


    // const bootstrapArray = result.data.articles.bootstrap;
    // console.log(bootstrapArray);
    // const bootstrapEntries = Object.keys(bootstrapArray);
    // console.log(bootstrapEntries);
    // // const javascriptArray = result.data.articles.javascript;
    // // const techArray = result.data.articles.tech;
    // // const jqueryArray = result.data.articles.jquery;
    // // const nodeArray = result.data.articles.node;
    // console.log(`hello`);
    // //everything above line 42 is ok. For Loop??

    // for( var i = 0; i < bootstrapEntries.length; i++){
    //     cardsContainer.appendChild(articleCards(bootstrapEntries[i]));
    //     console.log(`hello`);
    // }
    
// }) 

//version 8 - retake - again....over complicating...use a basic for loop
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     console.log(result);
//     //What do I know? --> line 24 console.logs an object, now I have to  go through an object to get to the information in the arrays (key:value pairs.).

//     //What do I want? I want the information in data.articles.bootstrap(javascript, jquery, node, technology). Bootstrap(etc.) is an array of objects. Iterate over the array. Use type checking. 
//     console.log(typeof result.data.articles);
//     //It's an object. 
//     console.log(result.data.articles);
//     //Object of arrays...the information I want is made up of the values. object values.
//     const test1 = result.data.articles;
//     console.log(Object.values(test1));
//     console.log(Object.keys(test1));
//     //Test with both.
//     test1.forEach(i =>{
//         test1.forEach(articleCards);
//     })
// })   

//version 7 - retake
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
    // console.log(result);
    //What do I know? --> line 24 console.logs an object, now I have to  go through an object to get to the information in the arrays (key:value pairs.).

    //What do I want? I want the information in data.articles.bootstrap(javascript, jquery, node, technology). Bootstrap(etc.) is an array of objects. Iterate over the array. Use type checking. 
    // console.log(typeof result.data.articles);
    //It's an object. 
    // console.log(result.data.articles);
    //Object of arrays...the information I want is made up of the values. object values.
    // const test1 = result.data.articles;
    // console.log(Object.values(test1));
    //Gives me all the articles. Can I go one level deeper? 
    // const test2 = result.data.articles.bootstrap;
    // console.log(Object.values(test2));
    //Yes!! Gives me back an array. I can iterate over this. Try with this code, but set to a const and loop through. 
    // const bootstrapArray = result.data.articles.bootstrap;
    // console.log(bootstrapLoop);
    //Line 36 and 39 give me the same, but line 39 doesn't need the Object.values() and it's an array I can just loop over. 
    // bootstrapArray.forEach(i =>{
    //     cardsContainer.appendChild(articleCards(i));
    // })
    //too complicated....the code should be simpler
// })   


// //version 6
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     console.log(result);
//     const articleData = result.data;
//     console.log(articleData);
//     function test(test){
//         if (test == []){
//             return `true`;
//         }
//         else {
//             return`the info in not correct`;
//         }
//     };
//     return test(articleData);
// })   
// // .then(test =>{
    
    
// // })

//version 5
// axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// .then(result =>{
//     console.log(result);
//     const articleData = result.data;
//     console.log(articleData);
//     function test(test) {
//         if (test === []){
//             return `true`;
//         }
//         else {return`the info in not correct`;}
//     };
//     return test(articleData);
// })   
    
    //version 4 
    //I can just use the array from Array.from(articles and change the function below programmatically)
    // const bootstrap = articleData.articles.bootstrap;
    // Array.from(bootstrap);
    // console.log(bootstrap);
    // console.log(bootstrap[0]);

    //Version 3 below doesn't work
    // Array.from(articleData.articles.bootstrap);

    //Version 2
    //Array.from works....do I have to make arrays from all the article groups??
    // Array.from(articleData);

    //Version 1
    // below works, maybe I have to use Array.from()??
    // console.log(articleData.articles.bootstrap);
    // const bootstrap = articleData.articles.bootstrap;
    // console.log(bootstrap);
    // console.log(bootstrap[0]);

    // doesn't connect with above
    // const cardsContainer = document.querySelector('.cardsContainer');
    // cardsContainer.appendChild(articleCards(bootstrap[0]));




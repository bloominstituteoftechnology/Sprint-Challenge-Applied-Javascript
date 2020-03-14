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

function articleCard(data){
    // console.log(data);
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const authorImg = document.createElement("img");
    const authorName = document.createElement("span")

// append
    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(authorImg); //do we need quotation marks?

//add classes
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
// add attributes
    authorImg.src = data.authorPhoto;
// add content
headline.textContent = data.headline;
authorName.textContent = `By ${data.authorName}`;

return card;
}

const connectToCardsContainer = document.querySelector(".cards-container"); //you are creating the referance to the HTML



axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then (response => {
    // console.log(response.data.articles.bootstrap)
     response.data.articles.bootstrap.forEach( item => {
        // console.log(item)
         connectToCardsContainer.append(articleCard(item));
                  
        })
    })

    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then (response => {
      console.log(response.data)
       response.data.articles.javascript.forEach( item => {
        //   console.log(item)
           connectToCardsContainer.append(articleCard(item));
                    
          })
      })

      axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then (response => {
      console.log(response.data)
       response.data.articles.node.forEach( item => {
        //   console.log(item)
           connectToCardsContainer.append(articleCard(item));
                    
          })
      })

      axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then (response => {
      console.log(response.data)
       response.data.articles.technology.forEach( item => {
        //   console.log(item)
           connectToCardsContainer.append(articleCard(item));
                    
          })
      })

      axios
      .get("https://lambda-times-backend.herokuapp.com/articles")
      .then (response => {
        console.log(response.data)
         response.data.articles.jquery.forEach( item => {
          //   console.log(item)
             connectToCardsContainer.append(articleCard(item));
                      
            })
        })
      
    // axios
    //     .get("https://lambda-times-backend.herokuapp.com/topics")
    //     .then (response => {
    //         // console.log(response.data.topics)
    //         response.data.topics.forEach( item => {
    //             topics.append(createTabs(item));
               
    //         })
    //     })











        // followersArray.forEach(item=>{
        //     axios 
        //     .get(`https://api.github.com/users/${item}`)
        //     .then(response=> cardDiv.append(cardCreator(response) )
        //     )})
          





    // axios
    // .get("https://dog.ceo/api/breed/mastiff/images/random/12")
    // .then(response => {
    //   console.log(response);
    //   response.data.message.forEach(item => {
    //     entryPoint.append(DogCard(item))
    //   });
    // })
    // .catch(error => {
    //   console.log("The data was not returned", error);
    // });
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div> c
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCont = document.querySelector(".cards-container");


axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(dataObj =>{
    console.log(`THEN IS WORKING`, dataObj.data);
    
    Object.values(dataObj.data.articles)
    .forEach(article =>{
        // for (var blog in article){
        //     console.log(`in the for loop`, Object.values(article));
        
        Object.values(article).forEach(article => {
            const newArticle = articleComp(article);
            articleCont.appendChild(newArticle);
        })         
        
    });  

})
.catch (error => {
    console.log(`CATCH IS WORKING`, error)
});



function articleComp(response){
    //create element
    const 
        cardDiv = document.createElement("div"),
        headlineDiv = document.createElement("div"),
        authorDiv = document.createElement("div"),
        imageDiv = document.createElement("div"),
        image = document.createElement("img"),
        authorSpan = document.createElement("span");

    //class
    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imageDiv.classList.add("img-container");

    //append
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imageDiv);
    imageDiv.append(image, authorSpan);
    
    //content
    headlineDiv.textContent = response.headline;
    image.src = response.authorPhoto;
    authorSpan.textContent = response.authorName;

    return cardDiv
}
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

axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then( (response) => {
    //console.log(response); 
    Object.values(response.data.articles).forEach( (item) => {
        item.forEach( (item) => {
            let cards = document.querySelector(".cards-container");
            cards.appendChild(cardFactory(item));
        })
    }) 
})



function cardFactory (axiosData){
    //elements
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");
    
    //structure
    div4.appendChild(img);
    div3.appendChild(div4);
    div3.appendChild(span);
    div2.appendChild(div3);
    div1.appendChild(div2);
    
    //content
    div2.textContent = axiosData.headline;
    img.src = axiosData.authorPhoto;
    span.textContent = axiosData.authorName;

    //style
    div1.classList.add("card");
    div2.classList.add("headline");
    div3.classList.add("author");
    div4.classList.add("img-container");

    return div1;

}
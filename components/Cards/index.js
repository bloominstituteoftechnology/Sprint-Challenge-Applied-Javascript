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
    console.log(response); //pass response.articles
    Object.values(response.data.articles).forEach( (item) => {
        item.forEach( (item) => {
            let cards = document.querySelector(".cards-container");
            cards.appendChild(createCard(item));
        })
    }) 
})



function createCard(axiosData){
    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    let newDiv4 = document.createElement("div");
    let newImg = document.createElement("img");
    let newSpan = document.createElement("span");

    newDiv1.classList.add("card");
    newDiv2.classList.add("headline");
    newDiv3.classList.add("author");
    newDiv4.classList.add("img-container");

    newDiv2.textContent = axiosData.headline;
    newImg.src = axiosData.authorPhoto;
    newSpan.textContent = axiosData.authorName;

    newDiv4.appendChild(newImg);
    newDiv3.appendChild(newDiv4);
    newDiv3.appendChild(newSpan);
    newDiv2.appendChild(newDiv3);
    newDiv1.appendChild(newDiv2);

    return newDiv1;

}
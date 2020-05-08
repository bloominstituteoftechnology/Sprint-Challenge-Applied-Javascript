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

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {

    console.log(response.data["articles"]);

    let newArr = [];

    Object.keys(response.data["articles"]).forEach(item => {

        //console.log(response.data["articles"][item]);

        newArr.push(response.data["articles"][item]);

    });

    //console.log(newArr);

    newArr.forEach(item => {

        console.log(item);

        item.forEach(item => {

            //console.log(item);

            //Creating elements

            let card = document.createElement("div");

            let headline = document.createElement("div");

            let author = document.createElement("div");

            let imgContainer = document.createElement("div");

            let img = document.createElement("img");

            let authorName = document.createElement("span");

            //Adding classes

            card.classList.add("card");

            headline.classList.add("headline");

            author.classList.add("author");

            imgContainer.classList.add("img-container");

            //Appending

            card.appendChild(headline);

            card.appendChild(author);

            author.appendChild(imgContainer);

            imgContainer.appendChild(img);

            author.appendChild(authorName);

            //Assigning values

            headline.textContent = item.headline;

            img.src = item.authorPhoto;

            authorName.textContent = item.authorName;

            //Appending card to existing element on screen

            document.querySelector(".cards-container").appendChild(card);

        });

    });

}).catch()
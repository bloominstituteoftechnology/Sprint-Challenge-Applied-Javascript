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

class CardCreator {
    constructor(item) {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        div1.appendChild(div2);
        div1.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(img);
        div3.appendChild(span);
                
        div1.classList.add('card');
        div2.classList.add('headline');
        div3.classList.add('author');
        div4.classList.add('img-container');

        div2.textContent = item.headline;
        img.src = item.authorPhoto;
        span.textContent = `By ${item.authorName}`;
                        
        return div1;
    }
}


const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

    console.log(response);

    const  responseData = response.data.articles;
    
    const dataArray = Object.keys(responseData).map(function(key) {
        return [responseData[key]];
    });

    dataArray.forEach(item => {
        item.forEach(item => {
            item.forEach(item => {

                const card = new CardCreator(item);
                cardsContainer.appendChild(card);
            })
        })
    }) 
})
.catch( error => {
    console.log("Error:", error);
});


// CAROUSEL would not work on the actual page.


// class CreateCarousel {
//     constructor(array) {
//       const mainDiv = document.createElement('div');
//       const btnDivL = document.createElement('div');
//       const btnDivR = document.createElement('div');
  
//       mainDiv.appendChild(btnDivL);
  
//       array.forEach((source)=>{
//         const newImage = document.createElement('img');
//         newImage.src = source;
//         mainDiv.appendChild(newImage);

//         return newImage
//       })
  
//       mainDiv.appendChild(btnDivR);
  
//       mainDiv.classList.add('carousel');
//       btnDivL.classList.add('left-button');
//       btnDivR.classList.add('right-button');
  
//       btnDivL.textContent = 'U+1f878';
//       btnDivR.textContent = 'U+1f87a';
  
//       return mainDiv;
//     }
//   }

// const srcArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']


// function appendCarousel(array) {
//     const carousel = new CreateCarousel(array);
//     const carouselContainer = document.querySelector('.carousel-container');
//     carouselContainer.appendChild(carousel);
//   }

// appendCarousel(srcArray);

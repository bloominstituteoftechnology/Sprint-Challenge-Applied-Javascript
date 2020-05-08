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

let holderArray = [];
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let allTopics = response.data.articles;
        let topics = Object.values(allTopics);
        let topicNames = Object.keys(allTopics);

        topics.forEach(topic => {
            topic.forEach(article => {
                for (let i = 0; i < topicNames.length; i++) {
                    let currentTopic = topicNames[i]

                    if (allTopics[currentTopic].includes(article)) {
                        article["data-topic"] = currentTopic;
                    }
                }
                let cardParent = document.querySelector(".cards-container");
                let newCard = createCard(article);
                cardParent.appendChild(newCard);
                holderArray.push(newCard);
            })
        })
    })
    .catch(error => {
        console.log(`!!! Error !!`);
    })

function createCard(holder) {
    // Created the elements 
    const cardContainer = document.createElement('div');
    if (holder['data-topic'] !== 'node') {
        cardContainer.classList.add(holder['data-topic']);
    } else if (holder['data-topic'] === 'node') {
        cardContainer.classList.add('node.js');
    }

    const headLine = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    // Added the classes
    cardContainer.classList.add('card');
    headLine.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    // Added the Content to the page.
    headLine.textContent = holder.headline;
    image.src = holder.authorPhoto;
    authorName.textContent = `Author ${holder.authorName}`;

    //append children
    cardContainer.appendChild(headLine);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer)
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(image);

    return cardContainer;
}
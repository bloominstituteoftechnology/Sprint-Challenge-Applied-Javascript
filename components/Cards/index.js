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

const cards = document.querySelector(".cards-container");
const articleData = fetchData(
  "https://lambda-times-backend.herokuapp.com/articles"
);
console.log("articleData:");
console.log(articleData);

appendArticles(cards, articleData);

async function fetchData(remoteDataSourceUri) {
  return await axios.get(remoteDataSourceUri);
}
function appendArticles(target, data) {
  //console.log(`appendArticles Data:`);
  //console.log(data);

  data
    .then(r => {
      const topics = r.data.articles;
      console.log(`Status: ` + r.status);
      console.log("topics data:");
      console.log(topics);

      const articleTopicNames = [
        "bootstrap",
        "javascript",
        "jquery",
        "node",
        "technology"
      ];
      const articleTopics = [
        r.data.articles.bootstrap,
        r.data.articles.javascript,
        r.data.articles.jquery,
        r.data.articles.node,
        r.data.articles.technology
      ];
      console.log(articleTopics);

      const topicCount = articleTopics.length;
      console.log("topicCount: " + topicCount);

      for (let i = 0; i <= topicCount - 1; i++) {
        const currentTopicName = articleTopicNames[i];
        const currentTopic = articleTopics[i];

        console.log("currentTopicName");
        console.log(currentTopicName);
        console.log("currentTopic data:");
        console.log(currentTopic);

        const articleCount = currentTopic.length;
        console.log("articleCount: " + articleCount);

        for (let j = 0; j <= articleCount - 1; j++) {
          target.appendChild(Article(currentTopic[j]));
        }
      }
    })
    .catch(e => {
      console.log(e);
    });
}

function Article(article) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const image = document.createElement("img");
  image.setAttribute("src", article.authorPhoto);

  const name = document.createElement("span");
  name.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(name);

  return card;
}

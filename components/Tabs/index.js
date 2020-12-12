log = console.log;
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topicsContainer = document.querySelector('.topics');
axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then((resolve) =>
  {
    log(resolve);
    //topicsContainer.appendChild(tabMaker(resolve.data));
  })
.catch(error => {
    log("DOES NOT COMPUTE!");
});
 //grab topics

function tabMaker(data) 
{
    //create tab, add class list, add text content
    const tabDiv    = document.createElement('div');
    const topicsDiv = document.createElement('div');
    const topicSpan = document.createElement('span');
    
    //add classes
    tabDiv.classList.add("tabs");
    topicsDiv.classList.add("topics");
    topicSpan.classList.add("title");

    topicSpan.innerText = "TRENDING TOPICS:";

    return tabDiv;
}

tabMaker();







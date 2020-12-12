// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
 //grab topics
const grabTopics = document.querySelector('.topics');
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


//axios get request
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(resolve => {
    
    resolve.topics.forEach(element => {     
       grabTopics.appendChild(tabMaker(element));
    });        
    
})

.catch(error => {
    log("DOES NOT COMPUTE!");
});




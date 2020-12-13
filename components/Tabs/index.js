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

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(res => {
    console.log(res.data.topics)
    const responseArray = res.data.topics
    responseArray.forEach(element => {
        const newTab = createTab(element)
        topicsContainer.appendChild(newTab)
    });
})
const topicsContainer = document.querySelector('.topics');
function createTab(topic){
    const tab = document.createElement("div")
    tab.textContent = topic
    tab.classList.add("tab")


return tab
} 


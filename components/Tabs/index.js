// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = [];
const tabs = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    response.data.topics.forEach(topic => {
        //console.log(topics);
        tabs.appendChild(newTab(topic));
        return topics;
    })
})

function newTab(topic) {
    const tab = document.createElement("div");
    tab.textContent = topic;
    tab.classList.add("tab");
    //console.log(tab);
    return tab;
}

// tabs.appendChild(newTab(topics[0])); //why wont this pass into newTab??




//console.log(topics);
// topics.forEach(topic => {
//     console.log(topic);
//     tabs.appendChild(newTab(topic));
// });
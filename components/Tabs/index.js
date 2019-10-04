// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let tabs = document.querySelector(".tabs")
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response)
        response.data.topics.forEach(element => {
            tabs.appendChild(theTabs(response.data.topics))
        });
    })
    .catch(err => {console.log("Error:", err)
})

function theTabs (data, topics){
    let tab = document.createElement("div")
    tab.classList.add("tabs")
    tab.textContent = "Topic Here"

    let myTopics = document.createElement("p")
    myTopics.classList.add("topics")
    myTopics.textContent = `${data.topics}`;
    tab.appendChild(myTopics)
    
    console.log(tab)
    return tab;
}
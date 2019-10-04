// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(param) {
    const tab = document.createElement("div");
    tab.classList.add("tab")
    tab.textContent = param;
    return tab;
};

axios
.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    // console.log('response', response)
    const htmlTarget = document.querySelector(".topics")
    const topics = response.data.topics
    topics.map(topic => {   
        htmlTarget.appendChild(createTab(topic))
     }) 
})
.catch(error => {
    console.log('catch error', error)
})



    



// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const Tabs = document.querySelector(".topics");

//// Acquiring the API
//
axios

.get("https://lambda-times-backend.herokuapp.com/topics")

.then( (res) => {
    TabsData = res.data.topics;
    TabsData.forEach(i => { Tabs.appendChild (TabCreator(i)) });
})

.catch( (err) => {console.log("There was an error: ", err)})
//

//// Creating a Tab
//
function TabCreator (data) {

    const tab = document.createElement("div");

    tab.classList.add("tab");
    tab.textContent = data;

    return tab;

}
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabs = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response);
    // console.log(response.data.topics);
    response.data.topics.forEach(f => {
      tabs.appendChild(createTab(f));
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

function createTab(f) {
  const tab = document.createElement("div");

  tab.textContent = f;

  tab.classList.add("tab");

  return tab;
}
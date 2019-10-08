// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function TabComponent(topic) {
  const tabDiv = document.createElement("div");
  tabDiv.textContent = topic;
  tabDiv.classList.add("tab");
  return tabDiv;
}

const promiseTab = axios.get(
  "https://lambda-times-backend.herokuapp.com/topics"
);

promiseTab
  .then(response => {
    let arr = response.data.topics;
    const getTopics = document.querySelector(".topics");
    arr.forEach(topic => {
      getTopics.appendChild(TabComponent(topic));
    });
    // console.log(getTopics);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

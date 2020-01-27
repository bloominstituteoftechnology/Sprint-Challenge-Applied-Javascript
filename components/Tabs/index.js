// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // handle success
    // console.log(response.data.topics);
    response.data.topics.forEach(topic => {
      // console.log(topic);
      tabParent.appendChild(createTab(topic));
    });
  });

const topicsContainer = document.querySelector(".topics");

const createTab = tab => {
  const newTab = document.createElement("div");
  newTab.classList.add("tab");
  newTab.textContent = tab;

  return newTab;
};

const tabParent = document.querySelector(".topics");

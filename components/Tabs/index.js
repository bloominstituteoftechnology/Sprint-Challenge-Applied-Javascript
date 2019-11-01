// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// <!-- TABS COMPONENT, PLACE TABS HERE -->
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>

///container
tabs = document.querySelector(".topics");

///axios
const promise1 = axios.get("https://lambda-times-backend.herokuapp.com/topics");

promise1
  .then(data => {
    console.log("HAI", data);
    const topicsForTab = data.data.topics;
    topicsForTab.forEach(element => {
      const tab = createTabs(element);
      tabs.appendChild(tab);
    });
  })

  .catch(error => {
    console.log("NO GUUD", error);
  });

function createTabs(techTopics) {
  ///create element
  const lambdaTab = document.createElement("div");

  ///set style (classname)
  lambdaTab.classList.add("tab");

  ////set Content
  lambdaTab.textContent = techTopics;

  ///event listener

  lambdaTab.addEventListener("click", () => {
    console.log("You clicked a tab");
  });

  return lambdaTab;
}

// <!-- TABS COMPONENT, PLACE TABS HERE -->
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>
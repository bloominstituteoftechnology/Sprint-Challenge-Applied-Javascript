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
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

const tabs = document.querySelector(".tabs");

function divTabs(data) {
  const topics = document.createElement("topics");
  topics.classList.add("topics");

  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = "topic here";
  topics.appendChild(tab);

  console.log(topics);
  return topics;
}

const mainTab = document.querySelector(".tabs");
mainTab.appendChild(divTabs());

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");
topics.appendChild(Tab("All"));

const topicData = fetchData(
  "https://lambda-times-backend.herokuapp.com/topics"
);
//console.log("topicData");
//console.log(topicData);

appendTopics(topics, topicData);

async function fetchData(remoteDateSourceUri) {
  return await axios.get(remoteDateSourceUri);
}

function appendTopics(target, data) {
  console.log(`appendTopics Data:`);
  console.log(data);

  data
    .then(r => {
      const topics = r.data.topics;
      const count = topics.length;
      console.log(`Status: ` + r.status);
      console.log("data");
      console.log(topics);
      console.log("data count: " + count);

      for (let i = 0; i <= count - 1; i++) {
        const currentData = topics[i];
        console.log(i);
        console.log(currentData);

        target.appendChild(Tab(currentData));
      }
    })
    .catch(e => {
      console.log(e);
    });
}

function Tab(data) {
  const tab = document.createElement("div");
  tab.textContent = data;
  tab.classList.add("tab");

  return tab;
}

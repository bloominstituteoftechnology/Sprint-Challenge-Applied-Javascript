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

// card
// const newTabs = [];
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    newTab(response.data.topics);

    response.data.topics.forEach(element => {
      topics.push(element);
    });
    topics.forEach(element => {
      newTab.appendChild(createTab(element));
    });
  })

  .catch(error => {
    console.log("error", error);
  });

console.log(topics);

//   elements

const tab = document.querySelector(".topics");

function createTab(element) {
  const newTab = document.createElement("div");
  newTab.classList.add("newTab");
  newTab.textContent = element;

  //   const get = document.querySelector(".topics");
  //   get.appendChild(newTabs);

  return newTab;
}

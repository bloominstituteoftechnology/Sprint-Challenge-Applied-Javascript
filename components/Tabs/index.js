// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const connectToTabs = document.querySelector(".tabs");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const topics = response.data.topics;
    topics.forEach(item => {
      connectToTabs.append(TopicCreator(item));
    });
  })
  .catch(error => {
    alert("error");
  });

function TopicCreator(input) {
  // Create HTML Elements
  const mainFrame = document.createElement("div");
  // Add Classes
  mainFrame.classList.add("tabs");
  // Add Content
  mainFrame.textContent = input;
  // return main element
  return mainFrame;
}

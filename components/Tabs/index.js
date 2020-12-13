log = console.log;
//  STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
function getHerokuData() {
  let herokuPromise = axios.get("https://lambda-times-api.herokuapp.com/topics");
  return herokuPromise;
}
// Once the data is resolved use console logs or breakpoints to review the structure.
// console.log(getHerokuData()); // review the structure.  Target is dataObject.topics
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
function createNewTab(topicString) {
  // create element
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = topicString;
  const topicsContainer = document.querySelector(".topics");
  topicsContainer.appendChild(tab);
  console.log(“Appended Topics Container”, topicsContainer);
  return tab;
};  

let promise = getHerokuData();
promise.then(({data: {topics: topics}}) => {
  topics.forEach(element => {
    createNewTab(element);
  });
})
  .catch((topics) => {
  log(topics);
});  



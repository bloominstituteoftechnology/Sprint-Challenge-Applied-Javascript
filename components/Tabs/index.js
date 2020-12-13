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
  tab.classList.add(‘tab’);
  tab.textContent = topicString;
  const topicsContainer = document.querySelector(‘.topics’);
  topicsContainer.appendChild(tab);
  // console.log(“Appended Topics Container”, topicsContainer);
  return tab;
};  // this func creates tabs
let promise = getHerokuData();
promise.then(({data: {topics: topics}}) => { // object destructuring   {objectProperty: assignedToVar}
  // console.log(“Topics the array variable: “, topics);
  topics.forEach(e => {
    createNewTab(e);
  });
}).catch((topics) => {
  console.log(“Promise call unsuccessful.“);
});  // end of the promise code
// promise.then(({data: user}) => { // object destructuring   {objectProperty: assignedToVar}
//   console.log(“User: “, user);
//   let cardContainer =  document.querySelector(‘.cards’);
//   cardContainer.appendChild(cardMaker(user)); // the append must go INSIDE the callback
// }).catch((user) => {
//   console.log(“Promise call unsuccessful.“)
// });
// test code, it works
// createNewTab(“testtab”);
// let topicsContainer = document.querySelector(‘.topics’);
// console.log(“appended container”, topicsContainer)

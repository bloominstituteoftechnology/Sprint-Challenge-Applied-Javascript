log = console.log;
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function getData() {
  let herokuPromise = axios.get("https://lambda-times-api.herokuapp.com/topics");
  return herokuPromise;
}

function createNewTab(topicString) {
  // create element
  let tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = topicString;
  let topicsContainer = document.querySelector(".topics");
  topicsContainer.appendChild(tab);
  // console.log(“Appended Topics Container”, topicsContainer);
  return tab;
};  // this func creates tabs
let promise = getData();
promise.then(({data: {topics: topics}}) => { 
  topics.forEach(element => {
    createNewTab(element);
  });
}).catch((topics) => {
  console.log(“DOES NOT COMPUTE!!“);
});  

createNewTab(herokuPromise);

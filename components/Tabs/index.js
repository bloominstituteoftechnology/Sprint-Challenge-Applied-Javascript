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
  .then(function(res) {
    // console.log(res);
    tabCreator(res);
    entryPointTab.append(newDiv);
  })
  .catch(function(err) {
    console.log(err);
  });
const entryPointTab = document.querySelector(".tabs");

let newDiv;
function tabCreator(res) {
  for (let i = 0; i < res.data.topics.length; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("tab");
    newDiv.textContent = res.data.topics[i];
    // console.log(`${i}=${newDiv.textContent}`);
    // console.log(entryPointTab.append(newDiv));
    entryPointTab.append(newDiv);
  }
  return newDiv;
}
//? why does commenting out the console.log() break the function?

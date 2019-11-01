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
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

const entryPointTab = document.querySelector(".tabs");

function tabCreator(tab) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tab");
  newDiv.textContent = tab.data.topics[0];
  //? Set data topics in forEach loop...

  entryPointTab.prepend(newDiv);
  return newDiv;
}

tabCreator(tabData);

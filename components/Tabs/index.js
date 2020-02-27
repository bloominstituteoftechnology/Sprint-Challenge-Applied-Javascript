// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topElement = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // handle success
    // console.log(response);

    for (i = 0; i < response.data.topics.length; i++) {
      topElement.appendChild(tabComponent(response.data));

      //   console.log(response.data.topics[i]);
    }
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

const tabComponent = obj => {
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab");
  tabContainer.textContent = obj.topics[i];
  return tabContainer;
};

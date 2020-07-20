// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicTab = (tabTopic) => {
  const newTab = document.createElement("div");

  newTab.textContent = tabTopic;

  newTab.classList.add("tab");

  return newTab;
};

const entryPoint = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    console.log("API RESPONSE", response);

    response.data.topics.forEach((tab, index) => {
      setTimeout(() => {
        const newTab = topicTab(tab);
        entryPoint.appendChild(newTab);
      }, 1000 * index);
    });
  })

  .catch((err) => {
    console.log("data not available! ", err);
    alert(`Data not available at this moment. Try again later ${err}`);
  })

  .then(() => {});

const topics = document.querySelectorAll(".tab");

topics.forEach((topic) => {
  topic.addEventListener("click", (event) => {
    // filtered = event.target.innerHTML;
    event.target.classList.add("test");
    console.log(filtered);
  });
});

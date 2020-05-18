// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = (topicData) => {
  const tab = document.createElement("div");
  const parentElement = document.querySelector("div.topics");

  tab.classList.add("tab");

  parentElement.appendChild(tab);

  tab.textContent = topicData;

  return tab;
};

const tabParent = document.querySelector("div.topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    console.log(response);
    const topicsArray = response.data.topics;

    topicsArray.forEach((t) => {
      console.log(t);
      tabParent.appendChild(topics(t));
    });
  })
  .catch((err) => {
    console.log("Bruh!", err);
  });

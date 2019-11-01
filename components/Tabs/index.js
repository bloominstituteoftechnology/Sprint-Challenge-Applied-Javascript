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
  .then(data => {
    const topics = data.data.topics;
    topics.forEach(topic => {
      const topics = document.querySelector(".topics");
      topics.appendChild(Tab(topic));
    });
    console.log("Success", topics);
  })
  .catch(error => {
    console.log("Error", error);
  });

function Tab(topic) {
  const topicDiv = document.createElement("div");
  topicDiv.setAttribute("data-tab", topic);
  topicDiv.classList.add("tab");
  topicDiv.textContent = topic;

  topicDiv.addEventListener("click", event => {
    const cards = document.querySelectorAll(".card");
    const tabs = document.querySelectorAll(".active-tab");
    topicDiv.classList.toggle("active-tab");
    tabs.forEach(tab => {
      tab.classList.remove("active-tab");
    });

    if (topicDiv.classList.contains("active-tab")) {
      cards.forEach(card => {
        if (topicDiv.dataset.tab.includes(card.dataset.tab)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    } else {
      cards.forEach(card => {
        card.style.display = "flex";
      });
    }
  });

  return topicDiv;
}

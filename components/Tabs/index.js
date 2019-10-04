// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    let topic = response.data.topics; // array
    topic.forEach(cb => {
      let newTab = Tabs(cb);
      topics.appendChild(newTab);
    });
  })
  .catch(error => {
    console.log(error);
  });

function Tabs(arr) {
  let tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = `${arr}`;

  return tab;
}

console.log(topics);

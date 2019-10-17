// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const container = document.querySelector(".topics");
const getTopics = async () => {
  try {
    return await axios.get("https://lambda-times-backend.herokuapp.com/topics");
  } catch (error) {
    console.log(error);
  }
};
const data = async () => {
  const request = await getTopics();
  const topics = request.data.topics;
  for (const topic of topics) {
    let div = document.createElement("div");
    div.setAttribute("class", "tab");
    div.textContent = topic;
    container.appendChild(div);
  }
};
 
data();
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabAx = document.querySelector('.topics');
const axProm = axios.get("https://lambda-times-backend.herokuapp.com/topics");

console.log(axProm);

axProm.then((response) => {
    const topicAr = response.data.topics;

    topicAr.forEach((item) => {
        let newTab = tab(item);
        tabAx.appendChild(newTab);
    })

});


let tab = (data) => {

    let topic = document.createElement("div");

    topic.classList.add("tab");
    topic.textContent = data;

    return topic;
}
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = [];

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response);

        response.data.topics.forEach(element => {
            topics.push(element);
        })
        topics.forEach(element => {
            tabs.appendChild(tabCreate(element));
        })
    })
    .catch(error => {
        console.log(error);
    })

    console.log(topics);

    const tabs = document.querySelector(".topics");

    function tabCreate(element) {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = element;

        return tab;
    }
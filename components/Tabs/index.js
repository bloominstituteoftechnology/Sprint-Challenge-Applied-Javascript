// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function getCardTopic(topic) {
    console.log(topic)
    console.log(document.querySelectorAll(`card`))
    document.querySelectorAll('.card').forEach(card => {
        if (topic === card.dataset.article) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}
axios.get("https://lambda-times-backend.herokuapp.com/topics").then((res) => {
    res.data.topics.forEach(topic => {
        const topicDiv = document.createElement("div")
        topicDiv.className = "tab"
        topicDiv.textContent = topic
        topicDiv.addEventListener("click", () => {
            if (topic === "node.js") {
                topic = "node"
            }
            getCardTopic(topic)
        })
        document.querySelector(".topics").appendChild(topicDiv)
    });
}).catch((err) => {
    console.log(err)
})
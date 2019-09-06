// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsData =
 axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach((topic) => Tab(topic));
    })

    .catch(error => {
        console.log(error);
    });


function Tab(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.innerText = data;
    tab.addEventListener("click", (event) => event.target.classList.toggle("active-tab") );
    // tab should determine what content we see
    const cards = document.querySelectorAll('.card');
    tabs = document.querySelector('.tabs .topics')
    tabs.appendChild(tab);

}

function renderContentbyTab() {

    const activeTabs = Array.from(document.querySelectorAll('.active-tab'));
    const activeTopics = activeTabs.map(tab => tab.innerHTML);
    console.log(activeTopics)
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach((card) => card.style.display = "none");
    activeTopics.forEach((topic) => document.querySelector(`.${topic}`).classList.add('card-active'));
    cards.forEach((card) => {
        if (card.classList.contains('card-active')) {
            card.style.display = "flex";
        }
    });
}

window.addEventListener("load", renderContentbyTab());
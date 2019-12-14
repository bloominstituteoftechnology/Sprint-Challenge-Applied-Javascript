// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicsElement = document.querySelector('.topics');


    ///////////////// Axios /////////////////

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
        .then((response) => {
            // console.log(response);
            const newTopics = response.data.topics;
            newTopics.forEach((topic) => {
                topicsElement.appendChild(tabCreator(topic))
            })
        })

    ///////////////// Tab Creator Component /////////////////
function tabCreator (object) {
    const tabTopic = document.createElement('div');

    tabTopic.classList.add('tab');

    tabTopic.textContent = object;

    // console.log(tabTopic);

    return tabTopic;
};


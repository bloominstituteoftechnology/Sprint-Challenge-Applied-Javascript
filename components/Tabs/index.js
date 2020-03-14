// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const myCard = response.data;
        carded.append(tabs(myCard));
    })
    .catch(error => {
        console.log("this is an error", error)

    });

const carded = document.querySelector('.topics');


function tabs(object) {
    const tabs = document.createElement('div');




    tabs.classList.add('tab')

    tabs.textContent = `${object.topics}`;
    return tabs;
};

// let newTabs = document.querySelector('.topics');

// newTabs.appendChild(tabs("topic here"));
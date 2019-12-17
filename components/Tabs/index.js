// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsArr = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log(res)
        const newTab = res.data.topics;
        newTab.push('aNewTab');

        // const bootstraps = newTab.bootstrap;
        // const javascripts = newTab.javascript;
        // const jquerys = newTab.jquery;
        // const nodes = newTab.node;
        // const technologys = newTab.technology;

        // const allTabs = bootstraps.concat(javascripts, jquerys, nodes, technologys);
        // console.log(allTabs)
    })
        

    .catch(err => {
        console.log(err);
    })

function addTab(obj) {
    const tab = document.createElement('div');
    tab.classList.add('tab');

    //tab.textContent = obj.topics[5];
}
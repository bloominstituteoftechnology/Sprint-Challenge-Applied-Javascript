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
        // console.log(response);
        newTab(response);
    })

    .catch(error => {
        console.log('The data request was not returned!', error);
    });

const tabs = document.querySelector('.topics');
// console.log(tabs)


function newTab(tabData) {

    let arr = tabData.data.topics;
    console.log(arr, 'arr');

    arr.forEach(item => {
        console.log(item, 'item')
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = item;
        const entryPoint = document.querySelector('.topics');
        entryPoint.appendChild(tab);
    });
    return tabs;
}


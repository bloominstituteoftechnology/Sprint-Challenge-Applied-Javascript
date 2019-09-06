// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let dataArray = [];

const newData = axios.get('https://lambda-times-backend.herokuapp.com/topics')
// topicsArray.forEach(topics => {
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (response => {
        console.log(response.data);
        dataArray = (response.data);
    // const tabs = newTab(data.data);
    // const newTabs = document.querySelector('.topics');
    // newTabs.appendChild(tabs);
    // console.log(response);
    // response.data.message.forEach(item => {
    })
    .catch(err => {
        console.log(err);
    })
// });
    console.log(dataArray);

    const newArray = Array.from(newData);
    console.log(newArray);

    const Topics = document.querySelector('.topics');

function newTopics(data){
    const createTabs = document.createElement('div');
    createTabs.classList.add('tab');
    createTabs.textContent = data;
    Topics.appendChild(createTabs);

    return Topics
};

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {return response.data.topics})
    .then((items) => {items.forEach((item) => newTopics(item))})
    .catch(error => {
        console.log(error);
    });

// function newTab(info) {
//     const divTab = document.createElement('div');
    
    
//     divTab.classList.add('divTab');
//     divTab.textContent = info.topics;
//     divTab.appendChild(topics);
    
    
//     return divTab;

// };




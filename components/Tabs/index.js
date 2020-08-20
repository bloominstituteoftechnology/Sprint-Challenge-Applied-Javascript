// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
        .then ((res) => {
            console.log('Here  is the res: ', res)
            res.data.topics.forEach((url) => {
            topicsContainer.appendChild(Tabs(url));
        });
    })
        .catch((err) => (
            console.log('Here is the err: ', err)
        ));

function Tabs(topic) {
    let tabsCreate = document.createElement('div');
    tabsCreate.classList.add('tab');
    tabsCreate.textContent = topic;

    tabsCreate.addEventListener('click', (e) => {
        
    })
    
    return tabsCreate;
};

let topicsContainer = document.querySelector('.topics');


// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function axiosFunction(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        const Data = response.data.topics;

        //console.log(response);

        Data.forEach(item =>{
            insertTopic(item);

        })
    })
}

const topics = document.querySelector('.topics');

function insertTopic(data){
    const tabs = document.createElement('div');
    tabs.classList.add('tab');
    tabs.textContent = data;

    topics.appendChild(tabs);
}

axiosFunction();
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//create empty array and send promise axios get request to API of topics
let dataArray = [];
const backendData = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log(response.data);
        dataArray = (response.data);
    })
    .catch(err => {
        console.log(err);
    });

console.log(dataArray);
 
//create an array from the variable containing the API data
const newArray = Array.from(backendData);
console.log(newArray);

//create a variable containing the topics class, and then write a function to create a div class 'tab'
const Topics = document.querySelector('.topics');
function makeTopics(data){
    const createTabs = document.createElement('div');
    createTabs.classList.add('tab');
    createTabs.textContent = data;
    Topics.appendChild(createTabs);
 
    return Topics;
};


//run function after axios get call to API iterating over data topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
	.then((response) => {return response.data.topics})
    .then((items) => {items.forEach((item) => makeTopics(item))})
    .catch(error => {
        console.log(error);
    });


  

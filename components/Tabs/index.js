// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//GET request
let topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) => {
    console.log('axiosData.data ', axiosData);
    let tabData = axiosData.data.topics;
    tabData.forEach((item) => {
        topics.appendChild(tab(item));
    })
     })
.catch((err) => {
    console.log('error: ', err )
})


//create Tab component
function tab(array){

//create Tab component
let tab = document.createElement('div');

//add class
tab.classList.add('tab');

//return
return tab;
}


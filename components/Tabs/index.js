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
    console.log(response);
})
.catch(error => {
    console.log("error", error);
});

function newTab() {
    const tab = document.createElement('div');
}
const topTabArray = document.querySelector('.tabs');
for (let i = 0; i < topTabArray.length; i++) {
    newTab.push(topTabArray[i]);
}
console.log(topTabArray);



// topTabArray.append(newTab());

const topic = document.querySelector(".topic");


// const tabTtl = document.createElement('span');




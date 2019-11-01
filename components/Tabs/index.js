// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = document.querySelector(`.topics`)

function createTab(array){


//over array
array.forEach(data => {
    

// make the element
const tab = document.createElement(`div`);
// add classlist to element
tab.classList.add(`tab`);
// add content to element
tab.textContent = data;
//append
newTab.appendChild(tab);
});
}
// axios request
 axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        console.log("recived", response);
        console.log(response.data.topics)

        createTab(response.data.topics);

    })
    .catch( error => {
        console.log(error)
    });
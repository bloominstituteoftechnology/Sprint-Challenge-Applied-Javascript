// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const mainTab = document.querySelector('.topics')

function createTab(arr) {

    // iterate over the array
    arr.forEach(data => {

         // Creating the Element
        const tab = document.createElement('div');

        // Adding the classList to the Element
        tab.classList.add('tab');

        // Adding text to the Element
        tab.textContent = data;

        mainTab.appendChild(tab);
    });
}


// Get Request
axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then((response) => {       

    // console.log("success", response);
    // console.log("the array we need", response.data.topics);
    
    // add array to our function
    createTab(response.data.topics);

  })
  .catch((err) => {

    console.log("Error: The data has not returned.", err);

  });


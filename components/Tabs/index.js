// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response => {

    console.log(response.data["topics"]);

    response.data["topics"].forEach(item => {

        //Creating an element

        let tab = document.createElement("div");

        //Adding a class to the element

        tab.classList.add("tab");

        //Assigning value to tab from data

        tab.textContent = item;

        //Appending to existing element on the screen

        document.querySelector("div.topics").appendChild(tab);

    });

}).catch()
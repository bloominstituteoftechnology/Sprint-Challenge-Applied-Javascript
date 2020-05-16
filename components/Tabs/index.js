// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//STARTING CODE HERE!\\

const topics = document.querySelector (".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log(response);
    response.data.topics.forEach (elem => {
        const freshTab = document.createElement("div");
        topics.appendChild(freshTab);
        freshTab.classList.add("tab"); 
        freshTab.textContent = elem;
    });
    

})

.catch (error => {
    console.log ("Sorry! It seems data had been corrupted! It's been banished for your safety");
});
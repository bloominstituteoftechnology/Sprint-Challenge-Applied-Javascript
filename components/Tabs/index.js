// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then( (response) => {
        // console.log(response);
        const topics = Array.from(response.data.topics);
        topics.forEach(item => {
            let newTab = tabCreate(item);
            entryPoint.appendChild(newTab);
        });
    })
    .catch( (err) => {
        console.log("Error")
    })

const entryPoint = document.querySelector(".tabs .topics");

const tabCreate = function(data){
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = data;
    return tabDiv;
}

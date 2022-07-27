// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const url = "https://lambda-times-backend.herokuapp.com/topics";


function callApi (url){
    axios
    .get(url)
    .then(response => {
        const topics = response.data.topics
        const search = response.data.search
        const login = response.data.login 
    })
.catch(err => console.error(err))
} 



callApi('https://lambda-times-backend.herokuapp.com/topics');
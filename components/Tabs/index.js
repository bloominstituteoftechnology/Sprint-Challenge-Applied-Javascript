// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicscheck = document.querySelector(".topics");

axios
.get("https://lambda-times-backend.herokuapp.com/topics")
.then(res => {
    //this is a holder for the get request topics object
    const topicholder = res.data.topics;

    //this iterates and appends 
    topicholder.forEach( item =>{
    //make variable for function tabcreate 
    const createtabtest = tabcreate(item);
    // appends new tab and keys of topic holder's items
    topicscheck.appendChild(createtabtest);
    });
    console.log(res.data.topics);
})
.catch(err =>{ 
    console.log(err);
});

//function to make new tabs 
function tabcreate(test){
    const tabs = document.createElement("div");

    tabs.classList.add("tab");

    tabs.textContent = test;

    return tabs; 
}


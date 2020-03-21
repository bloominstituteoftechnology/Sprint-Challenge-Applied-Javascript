// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const createTab = (tabData) =>{

    const topic = document.createElement("div");
    
    topic.classList.add("tab");
    topic.textContent = tabData;

    return topic;

}

const tabHook = document.querySelector('.topics');
const axiosPromise = axios.get("https://lambda-times-backend.herokuapp.com/topics");


axiosPromise.then((response) => {

const topicArray = response.data.topics;


    topicArray.forEach((item)=>{
        const newTab = createTab(item);
        tabHook.appendChild(newTab);  
    })

});

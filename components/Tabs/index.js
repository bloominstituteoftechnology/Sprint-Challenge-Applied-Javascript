log = console.log;
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topicsCont = document.querySelector('.topics');

const request = axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
    console.log('success')
    console.log(response.data.topics)
    response.data.topics.forEach(topics =>{
            let tab = document.createElement('div')
            console.log(tab)
            tab.classList.add('tab')
            tab.textContent = ${topics}
            let topDiv = document.querySelector('.topics')
            topDiv.appendChild(tab)
    })
})
.catch(error => {
    log("DOES NOT COMPUTE!");
});
 //grab topics

// function tabMaker(data) 
// {
//     const topicsContainer = document.querySelector('.topics');
  
//     //create tab, add class list, add text content
//     const tabDiv    = document.createElement('div');
//     const topicsDiv = document.createElement('div');
//     const topicSpan = document.createElement('span');
    
//     //add classes
//     tabDiv.classList.add("tabs");
//     topicsDiv.classList.add("topics");
//     topicSpan.classList.add("title");

//     topicSpan.innerText = "TRENDING TOPICS:";
    
//   //append maker
//   topicsContainer.appendChild(tabDiv);
//   tabDiv.appendChild(topicsDiv);
//   topicsDiv.appendChild(topicSpan);

//     return tabDiv;
// }

// tabMaker();






